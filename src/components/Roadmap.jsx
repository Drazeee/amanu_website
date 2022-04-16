import React from "react";
import { Emoji } from "react-apple-emojis";

import "../scss/Roadmap.scss";

export default function Roadmap() {
  return (
    <div className="roadmap safearea">
      <h4>Roadmap</h4>
      <h2>
        At Amanu, we have the <b>ambition</b> to <b>provide</b> you with the
        most <b>complete</b> service possible <Emoji name="gear" />.
      </h2>
      <div className="items">
        <div className="item">
          <h3>Link the Physical Art with the Meta Art</h3>
          <div className="dot"></div>
          <p>
            Our first objective is to develop our main technology that enable users to buy a NFT in our Virtual Galeries and receive the same version in Physical Art.
            <br />
            <br />
            To enable the best experience possible we are going to digitalise the best way possible the artwork of our Artist Partner so when people visite our Metaverse galeries they got the same experience as in real. Enabling our clients to experience and then purshase art all over the world without getting disapointed.
            <br />
            <br />
            The inter-connection between the NFT and the physical art is a first step for our clients to their Web3 identity. Getting this super realistic Artwork NFT compatible with the majority of the metaverse will enable you to decorate your actual or futures Metaresidence to share it with your friends. When your friends will come up in your real house you will have the chance to also have the artwork display at home thanks to our technology that links the NFT and the artwork.
          </p>
        </div>
        <div className="item">
          <h3> Devellopping our 3D scanning methods</h3>
          <div className="dot"></div>
          <p>
            Our ambition is that our NFT get always closer to the real artwork we scanned. So our clients gets the most loyal experience the artist wanted to give in reality. To improve that fidelity will be improving step by step our scanner to be able to scan all types of artwork you could imagine. Going from a simple painting to a detailed sculpture.  
          </p>
        </div>
        <div className="item">
          <h3>Implementation of fashion-related projects</h3>
          <div className="dot"></div>
          <p>
            For us fashion is one of the most important form of art here in France. And we deeply believe that Digital wearable will be the next big thing in the NFT community. In out ambition to replicate artwork, we will be aming to work with Fashion brand to replicate or create clothes to the metaverse. Simulating faithfully the material and textile of our clothes. Working with us you will have the most realistic experience of wearing clothes in the Metaverse.
          </p>
        </div>
        <div className="item">
          <h3>Provide a metaverse that best suit to our community</h3>
          <div className="dot"></div>
          <p>
           During all this process, hard work and creations, we will in the future get lot of experiences with the most famous Metaverse.
           All this experiences will help us to raise all the imperfection in these Metaverses and will enable us to create the most mature Metaverse possible suit to the vision we have.
          </p>
        </div>
      </div>
    </div>
  );
}
