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
    if (parsedNotes) {
      for (const date in notesState.payload) {
        const exists = parsedNotes.some(
          (note) => (note as NoteNode)?.date?.toString() === date
        );
        if (!exists) {
          setParsedNotes((prev: Note[]) => [
            ...prev,
            {
              date: new Date(date),
              details: notesState.payload[date],
            },
          ]);
        }
      }
    } else {
      const newParsedNotes = Object.entries(notesState.payload).map(
        ([date, details]) => ({
          date: new Date(date),
          details: details as string,
        })
      );
      setParsedNotes(newParsedNotes);
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
