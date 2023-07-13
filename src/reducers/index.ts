import { combineReducers } from "redux";

import userReducer from "./userReducer";
import notesReducer from "./notesReducer";
import editorReducer from "./editorReducer";

const allReducers = combineReducers({
  userReducer: userReducer,
  notesReducer: notesReducer,
  editorReducer: editorReducer,
});

export default allReducers;
