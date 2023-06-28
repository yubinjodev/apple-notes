import { Action } from "../types/store";
import { User } from "../types/user";

const userReducer = (state: User = null, action: Action): unknown=>{
    switch(action.type){
        case "LOGIN":
            state = action.payload;
            return state;
        case "LOGOUT":
            state = null;
            return state;
        default: 
            return state;
    }
}

export default userReducer;