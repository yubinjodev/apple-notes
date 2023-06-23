export type Action = {
    type:string;
    payload?: string | number;
}

export const login = () =>{
    return{
        type: "LOGIN"
    }
}

export const logout = () =>{
    return{
        type: "LOGOUT"
    }
}