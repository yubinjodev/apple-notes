import { Action } from "../actions";

const userStateReducer = (state = false, action:Action): boolean|undefined => {
    switch(action.type){
        case "LOGIN":
            return true;
        case "LOGOUT":
            return false;
        default:
            return state;
    }
};

export default userStateReducer;