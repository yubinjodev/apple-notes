import { useNotes } from "../hooks/useNotes";

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

//TODO: display notes.
//TODO: post notes.
//TODO: edit notes.
//TODO: delete notes.
