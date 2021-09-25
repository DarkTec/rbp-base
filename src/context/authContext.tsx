import React, { createContext } from "react";
import { useProvideAuth } from "../hooks/auth";

export const fakeAuthReducer = {
    isAuthenticated: false,
    signin(cb) {
        fakeAuthReducer.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        fakeAuthReducer.isAuthenticated = false;
        if (cb) setTimeout(cb, 100);
    }
};

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth} >
            {children}
        </authContext.Provider>
    );
}

export const authContext = createContext<any>({});