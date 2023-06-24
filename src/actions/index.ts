import { User } from "../components/SignUpForm";

export type Action = {
    type:string;
    payload: User | null;
}

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