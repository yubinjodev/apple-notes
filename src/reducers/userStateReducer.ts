import { Action } from "../actions";

const userStateReducer = (state = false, action:Action): boolean|undefined => {
    switch(action.type){
        case "SIGN_IN":
            return !state
        default:
            return state;
    }
};

export default userStateReducer;