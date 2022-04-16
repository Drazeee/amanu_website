import React from "react";
import { Emoji } from "react-apple-emojis";

import "../scss/Community.scss";

import { LazyLoadImage } from "react-lazy-load-image-component";

import com_img from "../assets/community.png";

export default function Community() {
  return (
    <div className="safearea community">
      <h4>Community</h4>
      <h2>
        Meet <Emoji name="handshake" alt="" /> people from{" "}
        <b>all over the world</b>, just from your <b>living room</b>!
      </h2>
      <div className="fullsize">
        <div>
          <p>
            People are already{" "}
            <b>owning</b> houses, making concerts & meetings in the Metaverse. {" "}
            All this content is in majority created by people who are not artist but by the rare one who knows Web3. {" "}
            <b> We want to bring the artist of our world to the metaverse in the simplier way possible</b>.
          </p>
          <p>
            Together, we will bring your art to this new world! Owning a gallery
            in the <b>Metaverses</b> is a way for you to shine and{" "}
            <b>meet a new community</b>. Your location is no longer a limit.
            Everyone can observe and enjoy you work.
          </p>
          <p>
            Go check {" "}
            <a href="https://spatial.io/" target="_blank">
              @Spatial
            </a>{" "}
            to see what already exist in the Metaverse!
          </p>
        </div>
        <LazyLoadImage src={com_img} alt="" className="noselect" />
      </div>

      <div className="key_numbers">
        <h6>KEY NUMBERS</h6>
        <h3>
          Take the lead, 
          <br /> be pioneers in a world under
          <br /> construction that needs you
        </h3>
        <div className="numbers">
          <div className="number">
            <h4>
              <b>$69</b>M+
            </h4>
            <h5>Single item sale</h5>
            <p>
              The most expensive sale was made on the 11 Mar 2021 by{" "}
              <a
                href="https://onlineonly.christies.com/s/beeple-first-5000-days/beeple-b-1981-1/112924"
                target="_blank"
              >
                @Christie's
              </a>{" "}
              and{" "}
              <a href="https://www.instagram.com/beeple_crap/" target="_blank">
                @Beeple
              </a>
              .
            </p>
          </div>
          <div className="number">
            <h4>
              <b>$41</b>B+
            </h4>
            <h5>Market cap</h5>
            <p>
              The volume of NFT traded in the market in 2021. This amount has
              been steadily increasing since.
            </p>
          </div>
          <div className="number">
            <h4>
              <b>16</b>%
            </h4>
            <h5>NFT Art</h5>
            <p>
              Art & Metaverses represent 16% of all the sales in the NFT market.
              So much opportunities !
            </p>
          </div>
        </div>
        <p>
          Artists are the creators we expect to build the metaverses. NFTs are built for
          you in order to show your work in all over the world, increase your
          community, and avoid fraud in the secondary market.
        </p>
      </div>
    </div>
  );
}
