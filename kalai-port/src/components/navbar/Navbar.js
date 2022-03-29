import React from "react";
import './styles/Navbar.scss';  
function Navbar({ dark, setdark }) {
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
                            <li>welxcome To KALAISURYA</li>
                        </ul>
                        <div class="d-flex">
                            <p onClick={() => setdark(!dark)}>
                                {dark ? (
                                    <ion-icon
                                        name="moon-outline"
                                        style={{
                                            fontSize: "2rem",
                                            color: "white",
                                        }}
                                    ></ion-icon>
                                ) : (
                                    <ion-icon
                                        name="sunny-outline"
                                        style={{
                                            fontSize: "2rem",
                                            color: "yellow",
                                        }}
                                    ></ion-icon>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
