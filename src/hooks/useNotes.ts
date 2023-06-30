import { useEffect, useState } from "react";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { importNotes } from "../actions";
import { RootState } from "../types/store";
import { GET_CONFIG, NOTES_BIN_ID, baseURL } from "../utils/api";
import { Notes } from "../types/notes";

export const useNotes = () => {
  const userState = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchCurrentUserNotes = async () => {
      if (userState) {
        const response = await axios.get(baseURL + NOTES_BIN_ID, GET_CONFIG);
        const notesData = await response.data.record;

        for (const id in notesData) {
          if (id === userState.email) {
            setNotes(notesData[id]);
            dispatch(importNotes(notesData[id]));
          }
        }
      }
    };

    fetchCurrentUserNotes();
  }, []);

  return { notes };
};
