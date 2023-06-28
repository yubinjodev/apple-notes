import { useDispatch, useSelector } from "react-redux";
import SidebarPreview from "./SidebarPreview";
import { useEffect } from "react";
import { importNotes } from "../actions";
import { useNotes } from "../hooks/useNotes";

export default function Sidebar() {

  const userState = useSelector((state:any) => state.userReducer)
  const dispatch = useDispatch()
  const {notes} = useNotes()

  useEffect(()=>{
    const fetchCurrentUserNotes = ()=>{
      if(userState){
        dispatch(importNotes(notes))
      }
    }

    fetchCurrentUserNotes();
    console.log(notes);
  },[notes])



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
