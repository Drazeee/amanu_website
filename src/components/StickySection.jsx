import React from "react";
import "../scss/StickySection.scss";

export default function StickySection({ side, content, sticky, ease }) {
    return (
        <div>
            <div
                className={`sticky-section ${side} safearea ${
                    ease ? "ease" : ""
                }`}
            >
                <div className="content">{content}</div>
                <div className="sticky">{sticky}</div>
            </div>
        </div>
    );
}
