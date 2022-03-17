import React from "react";

import "../scss/Contact.scss";

export default function Contact() {
    return (
        <div className="contact safearea">
            <div>
                <div>
                    <h1 className="title">Contact</h1>
                    <a href="mailto:contact@amanu.io">contact@amanu.io</a>
                </div>
            </div>
            <div>
                <form action="" method="post">
                    <input type="text" name="" id="" placeholder="Name..." />
                    <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Email address..."
                    />
                    <select name="" id="">
                        <option value="">Select a status</option>
                        <option value="">Artist</option>
                        <option value="">Investor</option>
                    </select>
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Message..."
                        res
                    ></textarea>
                </form>
            </div>
        </div>
    );
}
