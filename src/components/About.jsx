import React from 'react'
import { Emoji } from 'react-apple-emojis'

import "../scss/About.scss"

import stars from "../assets/about/stars.svg"
import pots from "../assets/about/pots.png"

export default function About() {
  return (
    <div className='safearea about'>
        <section>
            <img src="" alt="" />
            <div className='content'>
                <h4>About Us</h4>
                <h2>Artists <Emoji name="waving-hand" />. Keep an <strong>eye</strong> on your <br /><strong>art</strong>, we use the <strong>blockchain!</strong></h2>
                <p>We believe in blockchain. It's a technology that will revolutionize the way you work. By using our service, you will discover a new way to sell, and a unique new way to resell!<br/><br/>
                Imagine a unique certificate, link to your artwork, powerful enough to prove to the world, from anywhere and anytime, the authenticity of your work.</p>
            </div>
        </section>
        <section>
            <div className='content'>
                <h2><strong>Anchor</strong> your works, make them exists <strong>everywhere</strong> <Emoji name="globe-showing-europe-africa" />, earn <strong>royalties</strong> </h2>
                <p>With our service, your works are secure by everyone in the blockchain. For simple, everyone can view the owner of the certificate linked to your art! This process is 100% decentralized.<br/><br/>
                We provide you the ability to earn royalties from each resell in the secondary market. In other term, each time an owner of your work sell it, you earn  percentage of the total amount.</p>
            </div>
            <img src="" alt="" />
        </section>
        <div className="process">
            <div className="top">
                <h2>A <strong>simple</strong> and <strong>clear</strong> <img src={stars} alt="" /><br />method for your <strong>community</strong></h2>
                <p>The <b>certificate</b> allows your buyers to come and <b>request the delivery</b> of your work through our <b>tailor-made platform</b>. All costs related to the delivery are <b>paid</b> with the certificate. The frame changes <b>from green to yellow</b>: the certificate no longer allows you to order the work associated with it.</p>
            </div>
            <div className="sticky">
                <img src={pots} alt="" />
            </div>
        </div>
    </div>
  )
}
