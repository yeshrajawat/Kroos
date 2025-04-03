import React from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
const Main = () => {

  return (
    <div className='main'>

        <div className='nav'>
            <p>Kroos</p>
            <img className='avatar' src={assets.user_icon} alt="" />
        </div>

        <div className="main-container">
            <div className='greet'>
                <p> <span> Hello, Dev.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Help me learn SpringBoot Framework</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Why Messi is the G.O.A.T</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Improve the readability of the following code</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>

            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info"> Kroos may display inaccurate info, including about people, so double check its reponses.</p>
            </div>
        </div>

    </div>
  )
}

export default Main