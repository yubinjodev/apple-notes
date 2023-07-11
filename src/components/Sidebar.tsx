import { useEffect } from "react";
import { useFetchNotes } from "../hooks/useFetchNotes";
import { useDispatch, useSelector } from "react-redux";
import { importNotes } from "../actions";
import { RootState } from "../types/store";

export default function Sidebar() {
  const { notes } = useFetchNotes();
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.userReducer);

  useEffect(() => {
    if (userState) {
      console.log("NOTES", notes);
      dispatch(importNotes(notes));
    }
  });

  return (
    <aside className="sidebar-root">
      {/* {parsedNotes &&
        parsedNotes.map((note: any, idx: any) => (
          <SidebarPreview key={idx} date={note.date} details={note.details} />
        ))} */}
    </aside>
  );
}
