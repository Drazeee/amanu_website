import React from "react";
import twitter from "../assets/socials/twitter.svg";
import discord from "../assets/socials/discord.svg";
import instagram from "../assets/socials/instagram.svg";

import "../scss/Header.scss";

export default function Header() {
  return (
    <header className="safearea">
      <h1>AMANU</h1>
      <nav>
        <a href="">About</a>
        <a href="">Community</a>
        <a href="">Roadmap</a>
        <a href="">FAQ</a>
        <a href="">Team</a>
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
