import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../components/Header/Header";
import BrandSwiper from "../components/BrandSwiper";
import { motion } from "framer-motion";
import Separator from "../components/Separator";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Process from "../components/Process";
import Contact from "../components/Contact";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import GradientBg from "../assets/backgrounds/grandient-bg.svg";
import NftFrameArt from "../images/nft-frame-art.png";
import ArtTech from "../images/art-and-tech.png";
import NftCertificate from "../images/nft-certificate.png";
import Mint from "../images/mint.png";

import "../scss/Content.scss";

export default function Home() {
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
  return (
    <ParallaxProvider>
      <motion.div exit={{ opacity: 0 }} transition={transition}>
        <HelmetProvider>
          <div>
            {/* SEO and metadata */}
            <Helmet prioritizeSeoTags>
              <title>Amanu - Make people buy your physical art using NFT</title>
              <meta
                name="title"
                content="Amanu - Make people buy your physical art using NFT"
              />
              <meta
                name="description"
                content="Sell your physical art, earn royalties at the resell. Reach a new audience ! Welcome to the metaverse."
              />
              <meta name="msapplication-TileColor" content="#d8a41e"></meta>
              <meta name="theme-color" content="#d8a41e"></meta>
            </Helmet>

            {/* Main components */}
            <img
              src={GradientBg}
              alt=""
              style={{
                position: "absolute",
                top: 130,
                left: 0,
                width: "100%",
                zIndex: -1,
              }}
              className="noselect"
            />
            <Header />
            <Section
              left={
                <h1>
                  WE LINK
                  <br />
                  YOUR <span className="underline">ART</span>
                  <br />
                  WITH THE
                  <br /> <span className="underline">METAVERSE</span>
                </h1>
              }
              right={
                <Parallax speed={-10}>
                  <img src={NftFrameArt}></img>
                </Parallax>
              }
            />
            <Separator height="10vh" />
            <BrandSwiper />
            <Separator height="10vh" />
            <Section
              left={
                <Parallax speed={20}>
                  <img src={ArtTech}></img>
                </Parallax>
              }
              right={
                <div className="subtitle">
                  <h2 className="title">
                    Your art,
                    <br />
                    Our <div className="color">technology</div>
                  </h2>
                  <p>
                    An initial consulting phase permits us to better understand
                    your art, needs and personality to create the best possible
                    project.
                    <br />
                    <br />
                    We want our technology to best suit the artist's needs, thus
                    we focus on a great communication with our clients.
                  </p>
                </div>
              }
              invert={true}
            ></Section>
            <Separator height="10vh" />
            <Section
              left={
                <div className="subtitle">
                  <h2 className="title left">
                    NFT...
                    <br />
                    What's that ?
                  </h2>
                  <p>
                    Non Fungible Tokens (NFTs) are new way of building secured,
                    decentralized and traceable transactions.
                    <br />
                    <br />
                    NFT provide a unique certificate attesting to the
                    authenticity of a work, while referencing its creator and
                    allowing royalties to be obtained.
                  </p>
                </div>
              }
              right={
                <Parallax speed={20}>
                  <img src={NftCertificate}></img>
                </Parallax>
              }
            />
            <Separator height="10vh" />
            <Section
              left={
                <Parallax speed={20}>
                  <img src={Mint}></img>
                </Parallax>
              }
              right={
                <div className="subtitle">
                  <h2 className="title">
                    FROM PHYSIcal
                    <br />
                    TO <div className="color">DIGITAL</div>
                  </h2>
                  <p>
                    We offer artists a unique gateway to the world of tomorrow,
                    helping them to take the first step into the future: the
                    Metaverse.
                    <br />
                    <br />
                    To this end, our service allows physical works to be made
                    digital, in order to reach a new, younger audience, while
                    preserving their current customers.
                  </p>
                </div>
              }
              invert={true}
            />
            <Separator height="20vh" />
            <div></div>
            <Separator height="20vh" />
            <Process />
            <Separator height="30vh" />
            <Contact />
            <Separator height="25vh" />
            <Footer />
          </div>
        </HelmetProvider>
      </motion.div>
    </ParallaxProvider>
  );
}
