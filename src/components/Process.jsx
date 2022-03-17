import React from "react";
import Search from "../images/nft-search.png";
import File from "../images/nft-file.png";
import Blockchain from "../images/blockchain.png";
import Bid from "../images/bid.png";

import "../scss/Process.scss";

export default function Process() {
    return (
        <section className="process safearea">
            <h2 className="main_title">The Process</h2>
            <div className="grid">
                <div className="grid-item">
                    <p className="index">1</p>
                    <div className="content">
                        <div className="inside">
                            <h3 className="subtitle">
                                Consulting
                                <br />
                                Phase
                            </h3>
                            <img src={Search} alt="" />
                        </div>
                        <div className="behind">
                            <img src={Search} alt="" />
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <p className="index">2</p>
                    <div className="content">
                        <div className="inside">
                            <h3 className="subtitle">
                                Scanning
                                <br />
                                Phase
                            </h3>
                            <img src={File} alt="" />
                        </div>
                        <div className="behind">
                            <img src={File} alt="" />
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <p className="index">3</p>
                    <div className="content">
                        <div className="inside">
                            <h3 className="subtitle">
                                Release
                                <br />
                                Phase
                            </h3>
                            <img src={Blockchain} alt="" />
                        </div>
                        <div className="behind">
                            <img src={Blockchain} alt="" />
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <p className="index">4</p>
                    <div className="content">
                        <div className="inside">
                            <h3 className="subtitle">Enjoy</h3>
                            <img src={Bid} alt="" />
                        </div>
                        <div className="behind">
                            <img src={Bid} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
