import { combineReducers } from "redux";

import userStateReducer from "./userStateReducer";

const allReducers = combineReducers({
    userState: userStateReducer
})

export default allReducers;