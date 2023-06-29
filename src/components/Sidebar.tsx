import { useDispatch, useSelector } from "react-redux";
import SidebarPreview from "./SidebarPreview";
import { useEffect } from "react";
import { importNotes } from "../actions";
import { useNotes } from "../hooks/useNotes";
import { RootState } from "../types/store";

export default function Sidebar() {
  const userState = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  const { notes } = useNotes();

  useEffect(() => {
    const fetchCurrentUserNotes = () => {
      if (userState) {
        dispatch(importNotes(notes));
      }
    };

    fetchCurrentUserNotes();
  }, [notes]);

  return (
    <aside className="sidebar-root">
      {notes?.map((note, idx) => (
        <SidebarPreview key={idx} date={note?.date} details={note?.details} />
      ))}
    </aside>
  );
}
