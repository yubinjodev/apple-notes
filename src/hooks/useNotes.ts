import { useEffect, useState } from "react";

import { Notes } from "../types/notes";
import { useCurrentUser } from "./useCurrentUser";

export const useNotes = () => {
  const [notes, setNotes] = useState<Notes>(null);
  const {currentUser} = useCurrentUser();

  useEffect(() => {
    const fetchCurrentUserNotes = () => {
        if(currentUser){
            setNotes(currentUser?.notes as Notes)
        }
    };

    fetchCurrentUserNotes();
  }, [currentUser]);

  return { notes };
};
