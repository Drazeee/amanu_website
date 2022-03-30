import React from "react";

import "../scss/FaqItem.scss";

export default function FaqItem({ title, content }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="faq_item">
      <div onClick={() => setOpen(!open)}>
        <h6>{title}</h6>
        <div className="round">{open ? "-" : "+"}</div>
      </div>
      <div className={open ? "content visible" : "content"}>
        <p>{content}</p>
      </div>
    </div>
  );
}
