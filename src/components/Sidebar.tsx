import { useEffect, useState } from "react";
import { useNotes } from "../hooks/useNotes";
import SidebarPreview from "./SidebarPreview";
import { Note, Notes } from "../types/notes";

export default function Sidebar() {
  const { notes } = useNotes();

  console.log(notes);

  return (
    <aside className="sidebar-root">
      {/* {parsedNotes &&
        parsedNotes.map((note: any, idx: any) => (
          <SidebarPreview key={idx} date={note.date} details={note.details} />
        ))} */}
    </aside>
  );
}
