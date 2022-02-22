import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import favicon from "../favicon.ico";
import Header from "../components/Header/Header";
import BrandSwiper from "../components/BrandSwiper";
import Head from "../components/Head";
import StickySection from "../components/StickySection";
import CryptoArt from "../images/cryptocurrency-art.png";
import EthCoin from "../images/ethereum-coin.png";

export default function Home() {
    return (
        <HelmetProvider>
            <div>
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
                <Header />
                <BrandSwiper />
                <Head />
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
                />
            </div>
        </HelmetProvider>
    );
}
