export type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
    }
    : {
        type: Key;
        payload: M[Key];
    };
};


export type User = {
    email: string;
    name: string;
    password: string;
};


export enum AuthActionTypes {
    SIGNIN = "SIGNIN",
    LOGOUT = "LOGOUT",
    SIGNUP = "SIGNUP",
}