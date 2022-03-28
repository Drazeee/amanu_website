import React from "react";
import { Emoji } from "react-apple-emojis";

import "../scss/Faq.scss";
import FaqItem from "./FaqItem";

export default function Faq() {
  return (
    <div className="faq safearea">
      <div>
        <h4>FAQ</h4>
        <h2>
          Don't be <b>afraid</b> of the unknown, we are here{" "}
          <Emoji name="raised-hand" /> to <b>reassure</b> you
        </h2>
        <p>
          Everything you need to know about our service. Can't find the answer
          you're looking for? Please contact us.
        </p>
      </div>
      <div className="items">
        <FaqItem
          title="Lorem ipsum dolor sid amet?"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed congue sapien. Cras maximus libero sed turpis tincidunt rhoncus. Pellentesque."
        />
        <FaqItem
          title="Lorem ipsum dolor sid amet?"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed congue sapien. Cras maximus libero sed turpis tincidunt rhoncus. Pellentesque."
        />
        <FaqItem
          title="Lorem ipsum dolor sid amet?"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed congue sapien. Cras maximus libero sed turpis tincidunt rhoncus. Pellentesque."
        />
        <FaqItem
          title="Lorem ipsum dolor sid amet?"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed congue sapien. Cras maximus libero sed turpis tincidunt rhoncus. Pellentesque."
        />
        <FaqItem
          title="Lorem ipsum dolor sid amet?"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed congue sapien. Cras maximus libero sed turpis tincidunt rhoncus. Pellentesque."
        />
        <FaqItem
          title="Lorem ipsum dolor sid amet?"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed congue sapien. Cras maximus libero sed turpis tincidunt rhoncus. Pellentesque."
        />
      </div>
    </div>
  );
}
