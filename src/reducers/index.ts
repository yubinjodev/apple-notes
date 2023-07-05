import { combineReducers } from "redux";

import userReducer from "./userReducer";
import notesReducer from "./notesReducer";

const allReducers = combineReducers({
    userReducer: userReducer,
    notesReducer: notesReducer
})

export default allReducers;