import { Notes } from "../types/notes";
import { Action } from "../types/store";

const editorReducer = (state: Notes = null, action: Action): unknown => {
  switch (action.type) {
    case "SELECT_NOTE": {
      state = action.payload;
      return state;
    }
    default:
      return state;
  }
};

export default editorReducer;
