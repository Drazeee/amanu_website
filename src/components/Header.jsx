import React from "react";
import twitter from "../assets/socials/twitter.svg";
import discord from "../assets/socials/discord.svg";
import instagram from "../assets/socials/instagram.svg";
import { Link } from "react-router-dom";
import { Link as SmoothLink, animateScroll as scroll } from "react-scroll";

import { LazyLoadImage } from "react-lazy-load-image-component";

import "../scss/Header.scss";

export default function Header({ back }) {
  return (
    <header className="safearea">
      {back ? (
        <Link activeClass="active" to="/">
          <h1>AMANU</h1>
        </Link>
      ) : (
        <h1>AMANU</h1>
      )}
      {back ? null : (
        <nav>
          <SmoothLink
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </SmoothLink>
          <SmoothLink
            activeClass="active"
            to="community"
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
          >
            Community
          </SmoothLink>
          <SmoothLink
            activeClass="active"
            to="roadmap"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
          >
            Roadmap
          </SmoothLink>
          <SmoothLink
            activeClass="active"
            to="team"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
          >
            Team
          </SmoothLink>
          <Link to="/redeem">Redeem</Link>
        </nav>
      )}
      <div className="socials">
        <a href="https://twitter.com/Amanu_nft" target="_blank">
          <LazyLoadImage src={twitter} alt="twitter" />
        </a>
        <a href="https://discord.gg/SgxBWX98Hy" target="_blank">
          <LazyLoadImage src={discord} alt="discord" />
        </a>
        <a href="https://instagram.com/amanu.nft" target="_blank">
          <LazyLoadImage src={instagram} alt="instagram" />
        </a>
      </div>
    </header>
  );
}
