import { Notes } from "../types/notes";
import { Action } from "../types/store";

const notesReducer = (state: Notes = null, action: Action): unknown => {
  switch (action.type) {
    case "IMPORT_NOTES":
      state = action.payload;
      return state;
    case "SAVE_NOTE":
      state?.push(action.payload);
      return state;
    case "CLEAR_NOTES":
      state = null;
      return state;
    default:
      return state;
  }
};

export default notesReducer;
