import { useEffect } from "react";
import SidebarPreview from "./SidebarPreview";
import axios from "axios";
import { BIN_ID, GET_CONFIG, baseURL } from "../utils/api";

export default function Sidebar(){

    const collectNotes = async () =>{
        try{
            const response = await axios.get(baseURL + BIN_ID, GET_CONFIG)

        }catch(e){
            console.error(e)
        }
    }
    
    useEffect(()=>{
        collectNotes()
    },[])

    return(
        <aside className="sidebar-root">
            <SidebarPreview/>
            <SidebarPreview/>
            <SidebarPreview/>
            <SidebarPreview/>
            <SidebarPreview/>
        </aside>
    )
}

// get the notes maam