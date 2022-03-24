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
          <h3>Launch of our redeem platform</h3>
          <div className="dot"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            mauris sodales, sodales neque non, scelerisque dolor. In tincidunt
            dolor sit amet nibh ullamcorper laoreet. Mauris faucibus, nisl in
            feugiat pulvinar.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            mauris sodales, sodales neque non, scelerisque dolor. In tincidunt
            dolor sit amet nibh ullamcorper laoreet. Mauris faucibus, nisl in
            feugiat pulvinar.
          </p>
        </div>
        <div className="item">
          <h3>3D artwork scanning methods</h3>
          <div className="dot"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            mauris sodales, sodales neque non, scelerisque dolor. In tincidunt
            dolor sit amet nibh ullamcorper laoreet. Mauris faucibus, nisl in
            feugiat pulvinar.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            mauris sodales, sodales neque non, scelerisque dolor. In tincidunt
            dolor sit amet nibh ullamcorper laoreet. Mauris faucibus, nisl in
            feugiat pulvinar.
          </p>
        </div>
        <div className="item">
          <h3>Implementation of fashion-related projects</h3>
          <div className="dot"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            mauris sodales, sodales neque non, scelerisque dolor. In tincidunt
            dolor sit amet nibh ullamcorper laoreet. Mauris faucibus, nisl in
            feugiat pulvinar.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            mauris sodales, sodales neque non, scelerisque dolor. In tincidunt
            dolor sit amet nibh ullamcorper laoreet. Mauris faucibus, nisl in
            feugiat pulvinar.
          </p>
        </div>
        <div className="item">
          <h3>Provide our community with a metaverse</h3>
          <div className="dot"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            mauris sodales, sodales neque non, scelerisque dolor. In tincidunt
            dolor sit amet nibh ullamcorper laoreet. Mauris faucibus, nisl in
            feugiat pulvinar.
          </p>
        </div>
      </div>
    </div>
  );
}
