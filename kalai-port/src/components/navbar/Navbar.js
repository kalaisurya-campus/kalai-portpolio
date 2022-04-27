import React from "react";
import "./styles/Navbar.scss";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../firebasefiles";

function Navbar({ dark, setdark, user }) {
    const usehistory = useHistory();
    return (
        <div className="main-navbar">
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand">Navbar</a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li>Hi {user}</li>
                        </ul>
                        {!user && (
                            <div class="d-flex gap-4">
                                <button
                                    className="n-btns"
                                    onClick={() => {
                                        toast("WelCome Too SignUp Page!");
                                        usehistory.push("/signup");
                                    }}
                                >
                                    SignUp
                                </button>
                                <button
                                    className="n-btns"
                                    onClick={() => {
                                        toast("Welcome Too Login Page!");
                                        usehistory.push("/login");
                                    }}
                                >
                                    login
                                </button>
                            </div>
                        )}
                        {user && (
                            <div className="d-flex gap-4">
                                <div
                                    style={{
                                        width: "100%",
                                        fontSize: "2rem",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <ion-icon name="cart-outline"></ion-icon>
                                </div>
                                <button
                                    className="n-btns"
                                    onClick={() => {
                                        auth.signOut();
                                        toast("Logout SuccessFully!!");
                                        usehistory.push("/login");
                                    }}
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
