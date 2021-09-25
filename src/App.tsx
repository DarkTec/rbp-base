import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/login";
import "./App.scss";
import Home from "./pages/home";
import { useAuth } from "./hooks/auth";
import { ProvideAuth } from "./context/authContext";

function PrivateRoute({ children, ...rest }) {
    const auth = useAuth();

    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

class App extends Component {
    render() {
        return (
            <ProvideAuth>
                <Router>
                    <Switch>
                        <PrivateRoute path="/home">
                            <Home />
                        </PrivateRoute>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/">
                            <Redirect to="/home" />
                        </Route>
                    </Switch>
                </Router>
            </ProvideAuth>
        );
    }
}

export default App;