import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../types/store";
import SidebarPreview from "./SidebarPreview";
import { importNotes } from "../actions";
import { useUserNotes } from "../hooks/useUserNotes";

export default function Sidebar() {
  const { userNotes } = useUserNotes();
  const dispatch = useDispatch();
  const [parsedNotes, setParsedNotes] = useState<any>([]);

  const notesParser = (notesState: any) => {
    // console.log(notesState.payload);
    if (parsedNotes) {
      for (const date in notesState.payload) {
        // console.log(parsedNotes);
        if (!parsedNotes.map((note: any) => note.date).includes(date)) {
          setParsedNotes((prev: any) => [
            ...prev,
            {
              date: date,
              details: notesState.payload[date],
            },
          ]);
        }
      }
    } else if (!parsedNotes) {
      for (const date in notesState.payload) {
        setParsedNotes((prev: any) => [
          ...prev,
          {
            date: date,
            details: notesState.payload[date],
          },
        ]);
      }
    }
  };

  useEffect(() => {
    if (userNotes) {
      const notesState = dispatch(importNotes(userNotes));
      if (notesState) {
        notesParser(notesState);
      }
    }
  }, [userNotes]);

  useEffect(() => {
    // console.log(parsedNotes);
  }, [parsedNotes]);

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
