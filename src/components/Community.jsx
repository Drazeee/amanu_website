import React from 'react'
import { Emoji } from 'react-apple-emojis'

import "../scss/Community.scss"

import com_img from "../assets/community.png"

export default function Community() {
  return (
    <div className='safearea community'>
        <h4>Community</h4>
        <h2>Meet <Emoji name="handshake" alt="" /> people from <b>all over the world</b>, just from your <b>living room</b>!</h2>
        <div className="fullsize">
          <div>
          <p>The Metaverses are new virtual worlds. People are already <b>owning</b> houses, making concerts, meetings, ... There is a <b>lack of artists and artwork</b>.</p>
          <p>Together, we will bring your art to this new world! Owning a gallery in the <b>Metaverse</b> is a way for you to shine and <b>meet a new community</b>. Your location is no longer a limit. Everyone can observe and savor you work.</p>
          <p>Let's take a look at the <a href="https://spatial.io/" target="_blank">@Spatial</a> work, they are actors of this new world!</p>
          </div>
          <img src={com_img} alt="" className='noselect' />
        </div>
    </div>
  )
}
