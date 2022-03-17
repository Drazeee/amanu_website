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
                            <title>
                                Amanu - Make people buy your physical art using
                                NFT
                            </title>
                            <meta
                                name="title"
                                content="Amanu - Make people buy your physical art using NFT"
                            />
                            <meta
                                name="description"
                                content="Sell your physical art, earn royalties at the resell. Reach a new audience ! Welcome to the metaverse."
                            />
                            <meta
                                name="msapplication-TileColor"
                                content="#d8a41e"
                            ></meta>
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
                                    <br />{" "}
                                    <span className="underline">METAVERSE</span>
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
                                        Our{" "}
                                        <div className="color">technology</div>
                                    </h2>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book.
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
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book.
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
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book.
                                    </p>
                                </div>
                            }
                            invert={true}
                        />
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
