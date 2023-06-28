import { User } from "../types/user";

export const login = (userInfo: User) =>{
    return{
        type: "LOGIN",
        payload: userInfo
    }
}

export const logout = () =>{
    return{
        type: "LOGOUT"
    }
}