import React from "react";
import { Emoji } from "react-apple-emojis";

import "../scss/Faq.scss";
import FaqItem from "./FaqItem";

export default function Faq() {
  return (
    <div className="faq safearea">
      <div>
        <h4>FAQ</h4>
        <h2>
          Don't be <b>afraid</b> of the unknown, we are here{" "}
          <Emoji name="raised-hand" />
        </h2>
        <p>
          Everything you need to know about. 
          <br />
          Can't find the answer
          you're looking for? Please contact us.
        </p>
      </div>
      <div className="items">
        <FaqItem
          title="What's a NFT?"
          content="NFT stands for non-fungible token. It's built using the same kind of programming as cryptocurrency, like Bitcoin. NFT store valuable information. Because they hold a value primarily set by the market and demand, they can be bought and sold just like other physical types of art. NFTs' unique data makes it easy to verify and validate their ownership and the transfer of tokens between owners"
        />
        <FaqItem
          title="Where can I buy one of you NFT?"
          content="The projects with the artist we colaborated will be displayed on our Website. You'll be able to see how many collection are available. If there's one that you like you just click on it and it will redirect you to the website where you'll be able to buy it."
        />
        <FaqItem
          title="How can I redeem an NFT?"
          content="Once you bought a NFT provided buy us you are able to redeem it if the frame is in the right color. If it's the case you can then click here to redeem the Artwork."
        />
        <FaqItem
          title="How am I sure that I can redeem?"
          content="It's quite simple just check the color frame of your NFT if it's green that means you can redeem a physical artwork, if it's yellow that means you can't."
        />
        <FaqItem
          title="How do I transform my artwork into a NFT"
          content="If your are interested to digitalise your artwork into NFT. Just contact us and we will reach you to get the best NFT that suits you."
        />
      </div>
    </div>
  );
}
