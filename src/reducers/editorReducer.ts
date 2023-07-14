import { Note } from "../types/notes";
import { Action } from "../types/store";

// const editorReducer = (state: Notes = null, action: Action): unknown => {
const editorReducer = (state: Note = "", action: Action): unknown => {
  switch (action.type) {
    case "SELECT_NOTE": {
      state = action.payload;
      return state;
    }
    case "CLEAR_EDITOR": {
      state = "";
      return state;
    }
    default:
      return state;
  }
};

export default editorReducer;
