import React from "react";
import logo from "../../logo.svg";
import Hamburger from "../Hamburger";
import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  function onToggle(state) {
    setMenuOpen(state);
  }

  function getCurrentState(state) {
    setMenuOpen(state);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={"noselect" + (offset > 30 ? " offset" : "")}>
      <div>
        <Hamburger onToggle={onToggle} currentState={getCurrentState} />
        <div className="logo">
          <div onClick={scrollToTop}>
            <img src={logo} alt="Amanu logo" />
            <h1>AMANU</h1>
          </div>
        </div>
        <a href="#contact" className="nav">
          <h6>CONTACT</h6>
        </a>
        {menuOpen && <div className="menu"></div>}
      </div>
    </header>
  );
}
