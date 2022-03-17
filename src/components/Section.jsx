import React from "react";
import "../scss/Section.scss";

export default function Section({left, right, invert}) {
    return (
        <div
            className={invert ? "safearea section invert" : "safearea section"}
        >
            {left}
            {right}
        </div>
    );
}
