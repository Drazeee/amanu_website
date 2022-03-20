import React from "react";

import "../scss/Contact.scss";

export default function Contact() {
    return (
        <div className="contact safearea" id="contact">
            <div>
                <div>
                    <h1 className="title">Contact</h1>
                    <a href="mailto:contact@amanu.io">contact@amanu.io</a>
                </div>
            </div>
            <div>
                <form name="contact" method="post" data-netlify="true">
                    <input type="text" name="name" id="name" placeholder="Name..." />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email address..."
                    />
                    <select name="status" id="status">
                        <option value="none">Select a status...</option>
                        <option value="artist">Artist</option>
                        <option value="investor">Investor</option>
                        <option value="other">Other</option>
                    </select>
                    <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        placeholder="Message..."
                        res
                    ></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}
