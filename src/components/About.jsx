import React from "react";
import { Emoji } from "react-apple-emojis";

import "../scss/About.scss";

import { LazyLoadImage } from "react-lazy-load-image-component";

import stars from "../assets/about/stars.svg";
import pots from "../assets/about/pots.png";
import eth from "../assets/about/eth.svg";
import { Content } from "./content";
import { Title } from "./title";
import { Price } from "./price";

export default function About() {
  const button = React.useRef(null);
  const top = React.useRef(null);
  const title = React.useRef(null);
  const content = React.useRef(null);
  const steps = React.useRef(null);

  const [step, setStep] = React.useState(0);

  function addStep() {
    if (step > 1) {
      return;
    }
    setStep(step + 1);
    for (var i = 0; i < 3; i++) {
      steps.current.children[i].classList.remove("active");
    }
    steps.current.children[step + 1].classList.add("active");
    switch (step) {
      case 0:
        firstStep();
        break;
      case 1:
        secondStep();
        break;
    }
  }

  // React.useEffect(() => {
  //   switch (step) {
  //     case 0:
  //       initialStep();
  //       break;
  //     case 1:
  //       firstStep();
  //       break;
  //     case 2:
  //       secondStep();
  //       break;
  //   }
  //   for (var i = 0; i < 3; i++) {
  //     steps.current.children[i].classList.remove("active");
  //   }
  //   steps.current.children[step].classList.add("active");
  // }, []);

  function subStep() {
    if (step < 1) {
      return;
    }
    setStep(step - 1);
    for (var i = 0; i < 3; i++) {
      steps.current.children[i].classList.remove("active");
    }
    steps.current.children[step - 1].classList.add("active");
    switch (step) {
      case 1:
        initialStep();
        break;
      case 2:
        firstStep();
        break;
    }
  }

  function firstStep() {
    button.current.classList.add("second");
    button.current.children[0].innerHTML = "Claim Now";
    top.current.classList.add("second");
    content.current.innerHTML = Content[1];
    title.current.innerHTML = Title[1];
    button.current.classList.remove("third");
    top.current.classList.remove("third");
  }

  function initialStep() {
    button.current.classList.remove("second");
    button.current.children[0].innerHTML = "Buy Now";
    top.current.classList.remove("second");
    content.current.innerHTML = Content[0];
    title.current.innerHTML = Title[0];
    button.current.classList.remove("third");
    top.current.classList.remove("third");
  }

  function secondStep() {
    button.current.classList.add("third");
    button.current.children[0].innerHTML = "Resell";
    top.current.classList.add("third");
    button.current.classList.remove("second");
    top.current.classList.remove("second");
    content.current.innerHTML = Content[2];
    title.current.innerHTML = Title[2];
  }

  return (
    <div className="safearea about" id="about">
      <section>
        <LazyLoadImage src="" alt="" />
        <div className="content">
          <h4>About Us</h4>
          <h2>
            Artists <Emoji name="waving-hand" />. Keep an <strong>eye</strong>{" "}
            on your <br />
            <strong>art</strong>, we use the <strong>blockchain!</strong>
          </h2>
          <p>
            We believe in blockchain. It's a technology that will revolutionize
            the way you work. By using our service, you will discover a new way
            to sell, and a unique new way to resell!
            <br />
            <br />
            Imagine a unique certificate, link to your artwork, powerful enough
            to prove to the world, from anywhere and anytime, the authenticity
            of your work.
          </p>
        </div>
      </section>
      <section>
        <div className="content">
          <h2>
            <strong>Anchor</strong> your works, make them exists{" "}
            <strong>everywhere</strong>{" "}
            <Emoji name="globe-showing-europe-africa" />, earn{" "}
            <strong>royalties</strong>{" "}
          </h2>
          <p>
            With our service, your works are secure by everyone in the
            blockchain. For simple, everyone can view the owner of the
            certificate linked to your art! This process is 100% decentralized.
            <br />
            <br />
            We provide you the ability to earn royalties from each resell in the
            secondary market. In other term, each time an owner of your work
            sell it, you earn percentage of the total amount.
          </p>
        </div>
        <LazyLoadImage src="" alt="" />
      </section>
      <div className="process">
        <div className="top">
          <h2>
            A <strong>simple</strong> and <strong>clear</strong>{" "}
            <LazyLoadImage src={stars} alt="" />
            <br />
            method for your <strong>community</strong>
          </h2>
          <p>
            The <b>certificate</b> allows your buyers to come and{" "}
            <b>request the delivery</b> of your work through our{" "}
            <b>tailor-made platform</b>. All costs related to the delivery are{" "}
            <b>paid</b> with the certificate. The frame changes{" "}
            <b>from green to yellow</b>: the certificate no longer allows you to
            order the work associated with it.
          </p>
        </div>
        <div className="sticky" style={{ height: "95vh" }}></div>
        {/* <div className="sticky">
          <LazyLoadImage src={pots} alt="" className="pots noselect" />
          <div className="unclaimed_nft">
            <div className="top" ref={top}></div>
            <div className="infos">
              <h5>My pots #1</h5>
              <div>
                <div className="numbers">
                  <div>
                    <h6>Price</h6>
                    <div>
                      <LazyLoadImage src={eth} alt="" />
                      <p>{Price[step]} ETH</p>
                    </div>
                  </div>
                  <div>
                    <h6>Owner</h6>
                    <div>
                      <p>
                        Amanu <small>(0x735...eb2)</small>
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className="noselect"
                  ref={button}
                  onClick={() => addStep()}
                >
                  <p>Buy Now</p>
                </button>
              </div>
            </div>
          </div>
          <div className="desc">
            <div>
              <h6>STEP {step + 1}</h6>
              <h5 ref={title}>
                Le certificat associé à votre travail est acheté
              </h5>
            </div>
            <div className="mid">
              <button className="back" onClick={subStep}>
                {"<"}
              </button>
              <div ref={steps}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
              </div>
              <button className="next" onClick={addStep}>
                {">"}
              </button>
            </div>
            <div>
              <p ref={content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                congue fermentum ornare. In hac habitasse platea dictumst. Ut
                nec felis ut velit rhoncus cursus in in massa. Ut ut lacus at
                eros cursus facilisis quis nec massa. Duis lacinia mollis
                libero, non hendrerit metus tempor ac.
                <br />
                <br />
                Quisque lacus lectus, tempor eget bibendum et, consequat at
                purus. Praesent eleifend bibendum lectus, non consectetur metus
                tincidunt vel. Donec a augue in tellus pulvinar vestibulum.
                Fusce odio quam, venenatis id lorem vel, tristique rutrum odio.
                In vel nisl a lectus suscipit rutrum nec interdum lorem. Donec
                condimentum rhoncus ullamcorper.
              </p>
            </div>
          </div>
          <div className="height"></div>
        </div> */}
      </div>
    </div>
  );
}
