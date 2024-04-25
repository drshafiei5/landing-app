import { User } from "../types";

type Action =
    | { type: "SIGNIN"; user: User }
    | { type: "SIGNUP"; user: User }
    | { type: "LOGOUT" };

export interface State {
    user: User;
    authenticated: boolean;
}

const initUser = {
    name: "",
    password: "",
    email: "",
};

export const initialState: State = {
    user: initUser,
    authenticated: false,
};
export function authReducer(state: State, action: Action): State {
    switch (action.type) {
        case "SIGNIN": {
            return { ...state, user: action.user, authenticated: true };
        }

        case "SIGNUP": {
            return { ...state, user: action.user, authenticated: true };
        }

        case "LOGOUT":
            return {
                ...initialState,
            };
        default:
            return state;
    }
}
