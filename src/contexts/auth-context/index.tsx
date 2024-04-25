"use client";

import React from "react";
import { useLocalStorage } from "react-use";

import { User } from "@/src/types";
import { State, authReducer, initialState } from "@/src/reducers/auth-reducer";

interface AuthProviderState extends State {
    logout: () => void;
    signin: (user: User) => void;
    signup: (user: User) => void;
}
export const authContext = React.createContext<AuthProviderState | undefined>(
    undefined
);

authContext.displayName = "AuthContext";

export const useAuth = () => {
    const context = React.useContext(authContext);
    if (context === undefined) {
        throw new Error(`useAuth must be used within a AuthProvider`);
    }
    return context;
};

export const AuthProvider: React.FC<{
    children?: React.ReactNode;
}> = (props) => {
    const [savedAuth, saveAuth] = useLocalStorage(
        "auth",
        JSON.stringify(initialState)
    );
    const [state, dispatch] = React.useReducer(
        authReducer,
        JSON.parse(savedAuth!)
    );

    React.useEffect(() => {
        saveAuth(JSON.stringify(state));
    }, [state, saveAuth]);

    
    const logout = () => dispatch({ type: "LOGOUT" });
    const signin = (user: User) => dispatch({ type: "SIGNIN", user });
    const signup = (user: User) => dispatch({ type: "SIGNUP", user });

    const value = React.useMemo(
        () => ({
            ...state,
            signin,
            logout,
            signup,
        }),
        [state]
    );

    return <authContext.Provider value={value} {...props} />;
};
