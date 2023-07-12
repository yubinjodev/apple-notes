import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../types/store";
import { BASEURL, GET_CONFIG } from "../utils/api";
import { importNotes } from "../actions";

export const useFetchNotes = () => {
  const [notes, setNotes] = useState<any>(null);
  const userState = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();

  const filterNotes = (data: any) => {
    // console.log("filternotes start");
    const currentUserEmail = userState.email;

    for (const email in data) {
      // console.log(email, currentUserEmail);
      if (email === currentUserEmail) {
        // console.log("found match");
        setNotes(data[email]);
      }
    }
  };

  // useEffect(() => {
  //   console.log("dispatch importnotes");
  //   dispatch(importNotes(notes));
  // }, [notes]);

  useEffect(() => {
    const fetchNotes = async () => {
      // console.log("fetchNotes start");
      try {
        const response = await axios.get(
          BASEURL + process.env.REACT_APP_NOTES_BIN_ID,
          GET_CONFIG
        );
        const data = await response.data.record;

        if (data) {
          filterNotes(data);
        }
      } catch (e) {
        console.error(e);
      }
    };

    // console.log("userstate change detected");
    if (userState) {
      // console.log("user detected");
      fetchNotes();
    }
  }, [userState]);

  return { notes };
};
