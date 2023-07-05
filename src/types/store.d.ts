export type Action = {
    type:string;
    payload: User | null;
}

export type RootState = ReturnType<typeof rootReducer>