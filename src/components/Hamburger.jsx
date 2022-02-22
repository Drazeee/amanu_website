import React from "react";

export default function Hamburger({ onToggle, currentState }) {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggle() {
    setIsOpen(!isOpen);
    onToggle(!isOpen);
  }

  React.useEffect(() => {
    currentState(isOpen);
  }, []);

  return (
    <div>
      <button
        onClick={() => toggle()}
        className={isOpen ? "hamburger open" : "hamburger close"}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
}
