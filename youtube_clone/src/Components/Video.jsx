import React from 'react'
import "../Components/Video.css"
import Header from './Header'
import play from '../Images/play.png'
import playnext from '../Images/playnext.png'

import speaker from '../Images/speaker.png'


const Video = () => {
    return (
        <div>
            <Header />
            <div id='video_screen'>
                <div id='video_primary'>
                    <div id="playable">
                        <div id='playable_control_main'>
                            <div id='playable_played'>
                                <div id='playable_willplay'>

                                </div>

                            </div>
                            <div id='playable_controls'>
                                <div id='control_left'>
                                    <div id='play'>
                                   <img src={play} alt=''/>

                                    </div>
                                    <div id='playNext'>
                                    <img src={playnext} alt=''/>
                                    </div>
                                    <div id='volume'>
                                    <img src={speaker} alt=''/>
                                    </div>
                                    <div id='vduration'></div>
                                </div>
                                <div id='control_right'>06</div>
                            </div>
                        </div>
                    </div>
                    <div id='below'></div>
                </div>
                <div id='video_secondary'></div>
            </div>
        </div>
    )
}

export default Video