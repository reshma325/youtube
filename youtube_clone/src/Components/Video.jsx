import React, { useState } from 'react'
import "../Components/Video.css"
import Header from './Header'
import play from '../Images/play.png'
import playnext from '../Images/playnext.png'

import speaker from '../Images/speaker.png'
import { useNavigate } from 'react-router'


const Video = (props) => {
    const router = useNavigate();
    const [video, setVideo] = useState([{
        source: "https://www.youtube.com/embed/tgbNymZ7vqY",
        video_name: "Uncle Roger AMAZED by PERFECT EGG FRIED RICE (Chef Wang Gang)",
        channel_picture: "https://yt3.ggpht.com/eLCADxKBRj3JGsifnxitZwfsbeV3DDlS3r8SzN5QPT2juw0fTV34T09vIZWfEF3D4JmV2z6hZA=s88-c-k-c0x00ffffff-no-rj",
        channel_name: "mrnigelng",
        channel_subs: "84.5 lakh subscribers",
        video_likes: "7.2 lakhs",
        video_views_ago: "1.5 crore views 2 years ago",
        video_des: `The first 1000 people to click the link will get a free trial of Skillshare's Premium Membership: https://skl.sh/mrnigelng04211 Chef Wang Gang (@chefwang) make his egg fry rice. How does he do? Original weejio ➡️ • 厨师长分享：“香葱蛋炒饭”的家常做法，满满的“锅气”，松散干香！  `
    },
    {
        source: "https://www.youtube.com/embed/tgbNymZ7vqY",
        video_name: "Uncle Roger AMAZED by PERFECT EGG FRIED RICE (Chef Wang Gang)",
        channel_picture: "https://yt3.ggpht.com/eLCADxKBRj3JGsifnxitZwfsbeV3DDlS3r8SzN5QPT2juw0fTV34T09vIZWfEF3D4JmV2z6hZA=s88-c-k-c0x00ffffff-no-rj",
        channel_name: "mrnigelng",
        channel_subs: "84.5 lakh subscribers",
        video_likes: "7.2 lakhs",
        video_views_ago: "1.5 crore views 2 years ago",
        video_des: `The first 1000 people to click the link will get a free trial of Skillshare's Premium Membership: https://skl.sh/mrnigelng04211 Chef Wang Gang (@chefwang) make his egg fry rice. How does he do? Original weejio ➡️ • 厨师长分享：“香葱蛋炒饭”的家常做法，满满的“锅气”，松散干香！  `
    },
    {
        source: "https://www.youtube.com/embed/tgbNymZ7vqY",
        video_name: "Uncle Roger AMAZED by PERFECT EGG FRIED RICE (Chef Wang Gang)",
        channel_picture: "https://yt3.ggpht.com/eLCADxKBRj3JGsifnxitZwfsbeV3DDlS3r8SzN5QPT2juw0fTV34T09vIZWfEF3D4JmV2z6hZA=s88-c-k-c0x00ffffff-no-rj",
        channel_name: "mrnigelng",
        channel_subs: "84.5 lakh subscribers",
        video_likes: "7.2 lakhs",
        video_views_ago: "1.5 crore views 2 years ago",
        video_des: `The first 1000 people to click the link will get a free trial of Skillshare's Premium Membership: https://skl.sh/mrnigelng04211 Chef Wang Gang (@chefwang) make his egg fry rice. How does he do? Original weejio ➡️ • 厨师长分享：“香葱蛋炒饭”的家常做法，满满的“锅气”，松散干香！  `
    }])

    const { video_name} = props.match.params;
    return (
        <div>
            <Header />
            <div id='video_screen'>
                <div id='video_primary'>
                    <div id="playable">



                        {/* <div id='playable_control_main'>
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
                        </div> */}
                    </div>
                    <div id='below'>
                        {video.length && video.map((vid) => (
                       
                       <div id='channel_details'>{video_name}</div>
                    
                        ))}
                    </div>
                </div>
                <div id='video_secondary'></div>
            </div>
        </div>
    )
}

export default Video