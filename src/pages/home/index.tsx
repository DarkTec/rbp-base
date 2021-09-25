import React from "react";
import { useAuth } from "../../hooks/auth";

export default function Home() {
    const auth = useAuth();

    const logout = () => {
        auth.signout();
    }
    
    return (
        <div>
            <h2>Home</h2>
            <button onClick={() => logout()}>Log out</button>
        </div>
    )
}