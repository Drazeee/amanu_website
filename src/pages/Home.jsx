import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../components/Header/Header";
import BrandSwiper from "../components/BrandSwiper";
import Head from "../components/Head";
import StickySection from "../components/StickySection";
import CryptoArt from "../images/cryptocurrency-art.png";
import EthCoin from "../images/ethereum-coin.png";
import { motion } from "framer-motion";
import Separator from "../components/Separator";

export default function Home() {
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
  return (
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
          </Helmet>

          {/* Main components */}
          <Header />
          <BrandSwiper />
          <Head />
          {/* <Separator height="15vh" type="dots" />
                    <Separator height="15vh" type="line" />
                    <Separator height="15vh" type="small_line" color="#0f0" />
                    <Separator height="15vh" /> */}
          <Separator height="15vh" />
          <StickySection
            side="right"
            sticky={
              <>
                <img
                  src={EthCoin}
                  alt=""
                  style={{
                    position: "relative",
                    right: 0,
                    width: "100%",
                  }}
                />
              </>
            }
            ease={true}
          />
          <StickySection
            side="left"
            sticky={
              <>
                <img
                  src={CryptoArt}
                  alt=""
                  style={{
                    position: "relative",
                    right: 0,
                    width: "100%",
                  }}
                />
              </>
            }
            ease={true}
          />
        </div>
      </HelmetProvider>
    </motion.div>
  );
}
