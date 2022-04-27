import React from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import HomePage from "../components/homepage/HomePage";

import Login from "../components/Login/Login";
import Navbar from "../components/navbar/Navbar";
import { ProductAdd } from "../components/productadd/ProductAdd";

import Signup from "../components/signups/Signup";
function RoutingPagges(props) {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/navbar" component={Navbar} />
                    <Route path="/product" component={ProductAdd} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default RoutingPagges;
