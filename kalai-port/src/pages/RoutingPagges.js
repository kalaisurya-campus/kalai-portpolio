import React from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import HomePage from "../components/homepage/HomePage";
import Login from "../components/Login/Login";
function RoutingPagges(props) {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={Login} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default RoutingPagges;
