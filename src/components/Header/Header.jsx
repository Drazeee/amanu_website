import React from "react";
import logo from '../../logo.svg';
import Hamburger from "../Hamburger";
import "./Header.scss";

export default function Header() {
    return (
        <header className="safearea">
            <Hamburger />
            <div className="logo">
                <img src={logo} alt="" />
                <h1>AMANU</h1>
            </div>
            <a href=""><h6>CONTACT</h6></a>
        </header>
    );
}
