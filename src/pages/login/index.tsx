import React from "react";
import { useHistory, useLocation } from "react-router";
import LoginForm from "../../components/auth/loginForm";
import { useAuth } from "../../hooks/auth";

const Login = () => {
    const history = useHistory();
    const location = useLocation<any>();
    const auth = useAuth();

    const { from } = location.state || { from: { pathname: "/" } };

    const login = () => {
        auth.signin(() => {
            history.replace(from);
        });
    };

    return (
        <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <LoginForm />
            <button onClick={login}>Log in</button>
        </div>
    );
}

export default Login;