import React from "react";
import logo from "../../logo.svg";
import Hamburger from "../Hamburger";
import "./Header.scss";

export default function Header() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    function onToggle(state) {
        setMenuOpen(state);
    }

    function getCurrentState(state) {
        setMenuOpen(state);
    }

    return (
        <header className="safearea">
            <Hamburger onToggle={onToggle} currentState={getCurrentState} />
            <div className="logo">
                <img src={logo} alt="" />
                <h1>AMANU</h1>
            </div>
            <a href="">
                <h6>CONTACT</h6>
            </a>
            {menuOpen && <div className="menu"></div>}
        </header>
    );
}
