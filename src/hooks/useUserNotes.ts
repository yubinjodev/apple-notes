import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchNotes } from "../service/apiService";
import { RootState } from "../types/store";
import { DBNote, DBNotes } from "../types/notes";

export const useUserNotes = () => {
  const [userNotes, setUserNotes] = useState<DBNote>(null);
  const userState = useSelector((state: RootState) => state.userReducer);
  // save
  useEffect(() => {
    const filterNotes = (notesData: DBNotes) => {
      const currentUserEmail = userState.email;
      const currentUserNotes = notesData[currentUserEmail] || {};

      setUserNotes(currentUserNotes);
    };

    const fetchUserNotes = async () => {
      try {
        const notesData = await fetchNotes();

        if (notesData) {
          filterNotes(notesData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (userState) {
      fetchUserNotes();
    }
  }, [userState]);

  return { userNotes };
};
