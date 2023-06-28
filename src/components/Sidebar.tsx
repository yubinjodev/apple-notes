import { useNotes } from "../hooks/useNotes";
import { useUsers } from "../hooks/useUsers";
import SidebarPreview from "./SidebarPreview";

export default function Sidebar() {
    const {notes} = useNotes();

    console.log(notes);

  return (
    <aside className="sidebar-root">
      <SidebarPreview />
      <SidebarPreview />
      <SidebarPreview />
      <SidebarPreview />
      <SidebarPreview />
    </aside>
  );
}

// get the notes maam
