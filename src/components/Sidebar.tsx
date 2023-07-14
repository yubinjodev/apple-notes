import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { importNotes } from "../actions";
import { useUserNotes } from "../hooks/useUserNotes";
import { Action, RootState } from "../types/store";
import SidebarPreview from "./SidebarPreview";
import { Note, NoteNode } from "../types/notes";

export default function Sidebar() {
  const { userNotes } = useUserNotes();
  const dispatch = useDispatch();
  const [parsedNotes, setParsedNotes] = useState<Note[]>([]);
  const notesReducer = useSelector((state: RootState) => state.notesReducer);

  const notesParser = (notesState: Action) => {
    // console.log(notesState.payload);
    if (parsedNotes) {
      for (const date in notesState.payload) {
        // console.log(parsedNotes);
        if (
          !parsedNotes
            .map((note) => (note as NoteNode)?.date)
            .includes(new Date(date))
        ) {
          setParsedNotes((prev: Note[]) => [
            ...prev,
            {
              date: new Date(date),
              details: notesState.payload[date],
            },
          ]);
        }
      }
    } else if (!parsedNotes) {
      for (const date in notesState.payload) {
        setParsedNotes((prev: Note[]) => [
          ...prev,
          {
            date: new Date(date),
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
        parsedNotes.map((note) => {
          if (note && note.date && note.details) {
            return (
              <SidebarPreview
                key={note.date + note.details}
                date={note.date}
                details={note.details}
              />
            );
          }
          return null;
        })}
    </aside>
  );
}
