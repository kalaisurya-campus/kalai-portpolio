import { useEffect, useState } from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";

import RoutingPagges from "./pages/RoutingPagges";
function App() {
    const setthemmes = () => {
        return JSON.parse(localStorage.getItem("themes"));
    };
    const [dark, SetDark] = useState(setthemmes());
    useEffect(() => {
        localStorage.setItem("themes", JSON.stringify(dark));
    }, [dark]);
    return (
        <div className={dark ? "theme--dark" : "theme--light"}>
            <div className="App-front">
                <Navbar dark={dark} setdark={SetDark} />
                <RoutingPagges dark={dark} setdark={SetDark} />
            </div>
        </div>
    );
}

export default App;
