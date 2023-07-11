import { useEffect, useState } from "react";
import { useFetchNotes } from "../hooks/useFetchNotes";
import { useDispatch, useSelector } from "react-redux";
import { importNotes } from "../actions";
import { RootState } from "../types/store";
import SidebarPreview from "./SidebarPreview";

export default function Sidebar() {
  const { notes } = useFetchNotes();
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.userReducer);
  const notesState = useSelector((state: RootState) => state.notesReducer);
  const [parsedNotes, setParsedNotes] = useState<any>([]);

  const notesParser = () => {
    for (const date in notesState) {
      setParsedNotes((prev: any) => [
        ...prev,
        {
          date: date,
          details: notesState[date],
        },
      ]);
    }
  };

  useEffect(() => {
    if (notesState) {
      notesParser();
    }
  }, [notesState]);

  useEffect(() => {
    dispatch(importNotes(notes));
  }, [userState]);

  return (
    <aside className="sidebar-root">
      {parsedNotes &&
        parsedNotes.map((note: any) => (
          <SidebarPreview
            key={note.date + note.details}
            date={note.date}
            details={note.details}
          />
        ))}
    </aside>
  );
}

// TODO: notes keep getting added upon refresh
