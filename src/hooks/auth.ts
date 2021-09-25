import { useContext } from "react";
import { authContext, fakeAuthReducer } from "../context/authContext";
import useLocalStorage from "./localStorage";

export function useAuth() {
    return useContext(authContext);
}

export function useProvideAuth() {
    const [user, setUser] = useLocalStorage<any>("authState", null);

    const signin = cb => {
        return fakeAuthReducer.signin(() => {
            setUser("user");
            cb();
        });
    };

    const signout = cb => {
        return fakeAuthReducer.signout(() => {
            setUser(null);
            if (cb) cb();
        });
    };

    return {
        user,
        signin,
        signout
    };
}