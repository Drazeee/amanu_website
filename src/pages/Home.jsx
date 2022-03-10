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
import Partners from "../components/Partners";

import GradientBg from "../assets/backgrounds/grandient-bg.svg";
import NftFrameArt from "../images/nft-frame-art.png";
import ArtTech from "../images/art-and-tech.png";
import NftCertificate from "../images/nft-certificate.png";
import Mint from "../images/mint.png";

import "../scss/Content.scss";

export default function Home() {
    const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
    return (
        <motion.div exit={{ opacity: 0 }} transition={transition}>
            <HelmetProvider>
                <div>
                    {/* SEO and metadata */}
                    <Helmet prioritizeSeoTags>
                        <title>
                            Amanu - Make people buy your physical art using NFT
                        </title>
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
                    <div className="safearea" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <h1 style={{fontSize: "6.5rem", fontWeight: "600"}}>
                            WE LINK
                            <br />YOUR <span className="underline">ART</span>
                            <br />WITH THE
                            <br /> <span className="underline">METAVERSE</span>
                        </h1>
                        <img src={NftFrameArt} alt="" />
                    </div>
                    <Separator height="15vh" />
                    <BrandSwiper />
                    <Separator height="15vh" />
                    <div className="safearea" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <img src={ArtTech} alt="" style={{maxWidth: "45%", width: "750px"}} />
                        <div style={{width: "35%"}}>
                            <h2 style={{fontWeight: "500", textTransform: "uppercase", fontSize: "2.5rem"}} className="title">Your art,<br />Our <span className="color">technology</span></h2>
                            <p style={{marginTop: "4vh", fontSize: "1.2rem", fontWeight: "200"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <Separator height="10vh" />
                    <div className="safearea" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <div style={{width: "35%"}}>
                            <h2 style={{fontWeight: "500", textTransform: "uppercase", fontSize: "2.5rem"}} className="title left">NFT...<br />What's that ?</h2>
                            <p style={{marginTop: "4vh", fontSize: "1.2rem", fontWeight: "200"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <img src={NftCertificate} alt="" style={{maxWidth: "45%", width: "750px"}} />
                    </div>
                    <Separator height="10vh" />
                    <div className="safearea" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <img src={Mint} alt="" style={{maxWidth: "45%", width: "650px"}} />
                        <div style={{width: "35%"}}>
                            <h2 style={{fontWeight: "500", textTransform: "uppercase", fontSize: "2.5rem"}} className="title">FROM PHYSIcal<br />TO <span className="color">DIGITAL</span></h2>
                            <p style={{marginTop: "4vh", fontSize: "1.2rem", fontWeight: "200"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </HelmetProvider>
        </motion.div>
    );
}
