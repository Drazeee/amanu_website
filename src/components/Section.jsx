import React from "react";
import "../scss/Section.scss";

export default function Section({left, right}) {
    return (
        <div
            className="safearea section"
        >
            {left}
            {right}
        </div>
    );
}
