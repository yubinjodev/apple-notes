import { Note, Notes } from "../types/notes";
import { User } from "../types/user";

export const login = (userInfo: User) =>{
    return{
        type: "LOGIN",
        payload: userInfo
    }
}

export const logout = () =>{
    return{
        type: "LOGOUT"
    }
}

export const importNotes =(notes: Notes)=>{
    return{
        type: "IMPORT_NOTES",
        payload: notes
    }
}

export const saveNote = (note: Note)=>{
    return{
        type:"SAVE_NOTE",
        payload: note
    }
}