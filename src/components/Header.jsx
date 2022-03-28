import React from "react";
import twitter from "../assets/socials/twitter.svg";
import discord from "../assets/socials/discord.svg";
import instagram from "../assets/socials/instagram.svg";
import { Link } from "react-scroll";

import "../scss/Header.scss";

export default function Header() {
  return (
    <header className="safearea">
      <h1>AMANU</h1>
      <nav>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="community"
          spy={true}
          smooth={true}
          offset={-70}
          duration={600}
        >
          Community
        </Link>
        <Link
          activeClass="active"
          to="roadmap"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
        >
          Roadmap
        </Link>
        <Link
          activeClass="active"
          to="faq"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
        >
          FAQ
        </Link>
        <Link
          activeClass="active"
          to="team"
          spy={true}
          smooth={true}
          offset={-70}
          duration={900}
        >
          Team
        </Link>
      </nav>
      <div className="socials">
        <a href="">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="">
          <img src={discord} alt="discord" />
        </a>
        <a href="">
          <img src={instagram} alt="instagram" />
        </a>
      </div>
    </header>
  );
}
