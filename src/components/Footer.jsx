import React from 'react'

import "../scss/Footer.scss"

export default function Footer() {
  return (
    <footer className='safearea'>
      <div className="left">
        <div>
          <h6>Amanu helps artists to get their artworks more secure and usable in all Metaverses.</h6>
          <a href="mailto:contact@amanu.io">contact@amanu.io</a>
        </div>
        <p>© 2022 Amanu - All Rights Reserved</p>
      </div>
      <div className="right">
        <div className="items">
          <h6>NAVIGATIONS</h6>
          <a href="">Home</a>
          <a href="">Community</a>
          <a href="">Roadmap</a>
          <a href="">FAQ</a>
          <a href="">Team</a>
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
  )
}
