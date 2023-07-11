import { useFetchNotes } from "../hooks/useFetchNotes";

export default function Sidebar() {
  // const { notes } = useFetchNotes();

  // console.log(notes);

  return (
    <aside className="sidebar-root">
      {process.env.REACT_APP_BASEURL}

      {/* {parsedNotes &&
        parsedNotes.map((note: any, idx: any) => (
          <SidebarPreview key={idx} date={note.date} details={note.details} />
        ))} */}
    </aside>
  );
}
