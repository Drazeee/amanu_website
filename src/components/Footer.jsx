import React from "react";
import "../scss/Footer.scss";

import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
    return (
        <footer>
            <div className="safearea">
                <p>Copyright© Amanu {new Date().getFullYear()}</p>
                <div className="socials">
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
        </footer>
    );
}
