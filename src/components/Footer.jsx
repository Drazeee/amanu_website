import React from "react";
import "../scss/Footer.scss";

import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
    return (
        <footer>
            <div className="safearea">
                <p>Copyright© Amanu {new Date().getFullYear()}</p>
                <div className="socials">
                    <a href="https://www.linkedin.com/company/amanu-io/" target="_blank">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="https://twitter.com/Amanu_nft" target="_blank">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com/amanu.nft" target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}
