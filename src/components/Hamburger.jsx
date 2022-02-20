import React from "react";

export default function Hamburger() {
    const [isOpen, setIsOpen] = React.useState(false);
    return <div>
        <button onClick={() => setIsOpen(!isOpen)} className={isOpen ? "hamburger close" : "hamburger open"}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>;
}
