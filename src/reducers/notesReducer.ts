import { Action } from "../types/store";
import { Notes } from "../types/notes";

const notesReducer = (state: Notes = null, action: Action): unknown =>{
    switch(action.type){
        case "IMPORT_NOTES":
                state = action.payload;
                return state;
        default:
            return state
    }
}

export default notesReducer;