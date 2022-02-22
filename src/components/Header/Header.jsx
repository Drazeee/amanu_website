import React from "react";
import logo from "../../logo.svg";
import Hamburger from "../Hamburger";
import "./Header.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  function onToggle(state) {
    setMenuOpen(state);
  }

  function getCurrentState(state) {
    setMenuOpen(state);
  }

  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={"noselect" + (offset > 30 ? " offset" : null)}>
      <div className="safearea">
        <Hamburger onToggle={onToggle} currentState={getCurrentState} />
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Amanu logo" />
            <h1>AMANU</h1>
          </Link>
        </div>
        <Link to="/contact" className="nav">
          <h6>CONTACT</h6>
        </Link>
        {menuOpen && <div className="menu"></div>}
      </div>
    </header>
  );
}
