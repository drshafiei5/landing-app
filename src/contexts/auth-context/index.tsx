import React, {
    createContext,
    useReducer,
    Dispatch,
    PropsWithChildren,
    useEffect,
} from "react";
import { User, ActionMap, AuthActionTypes } from "@/src/types";

type UserMaybeNull = User | null;

type AuthState = {
    authenticated: boolean;
    user: UserMaybeNull;
    loading: boolean;
};

type AuthPayload = {
    [AuthActionTypes.SIGNIN]: UserMaybeNull;
    [AuthActionTypes.SIGNUP]: UserMaybeNull;
    [AuthActionTypes.LOGOUT]: null;
};

type AuthActions = ActionMap<AuthPayload>[keyof ActionMap<AuthPayload>];

export const authReducer = (state: AuthState, action: AuthActions) => {
    switch (action.type) {
        case AuthActionTypes.SIGNIN:
        case AuthActionTypes.SIGNUP:
            return {
                ...state,
                authenticated: true,
                user: action.payload,
            };

        case AuthActionTypes.LOGOUT:
            return {
                ...state,
                authenticated: false,
                user: null,
            };

        default:
            return state;
    }
};

const initialState = JSON.parse(localStorage.getItem("localUser")!) || {
    user: null,
    authenticated: false,
    loading: true,
};

const AuthContext = createContext<{
    state: AuthState;
    dispatch: Dispatch<AuthActions>;
}>({
    state: initialState,
    dispatch: () => null,
});

const AuthProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    useEffect(() => {
        localStorage.setItem("localUser", JSON.stringify(state));
    }, [state]);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
