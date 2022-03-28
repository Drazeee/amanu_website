import React from "react";

import "../scss/Footer.scss";

import { Link, animateScroll as scroll } from "react-scroll";

export default function Footer() {
  return (
    <footer className="safearea">
      <div className="left">
        <div>
          <h6>
            Amanu helps artists to get their artworks more secure and usable in
            all Metaverses.
          </h6>
          <a href="mailto:contact@amanu.io">contact@amanu.io</a>
        </div>
        <p>© 2022 Amanu - All Rights Reserved</p>
      </div>
      <div className="right">
        <div className="items">
          <h6>NAVIGATIONS</h6>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="community"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
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
            duration={600}
          >
            FAQ
          </Link>
          <Link
            activeClass="active"
            to="team"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Team
          </Link>
        </div>
        <div className="items">
          <h6>SOCIALS</h6>
          <a href="">Twitter</a>
          <a href="">Discord</a>
          <a href="">Instagram</a>
          <a href="">Facebook</a>
        </div>
        <div className="items">
          <h6>COMPANY</h6>
          <a href="">Terms & Conditions</a>
          <a href="">Team</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
