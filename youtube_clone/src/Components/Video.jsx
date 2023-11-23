import React, { useState } from 'react'
import "../Components/Video.css"
import Header from './Header'
import play from '../Images/play.png'
import playnext from '../Images/playnext.png'
import { Like, Dislike, Share, Menu, Sort } from './icons'

import { useNavigate } from 'react-router'


const Video = () => {
    const router = useNavigate();
    const [video, setVideo] = useState([{
        source: "https://www.youtube.com/embed/tgbNymZ7vqY",
        video_name: "Uncle Roger AMAZED by PERFECT EGG FRIED RICE (Chef Wang Gang)",
        channel_picture: "https://yt3.ggpht.com/eLCADxKBRj3JGsifnxitZwfsbeV3DDlS3r8SzN5QPT2juw0fTV34T09vIZWfEF3D4JmV2z6hZA=s88-c-k-c0x00ffffff-no-rj",
        channel_name: "mrnigelng",
        channel_subs: "84.5 lakh subscribers",
        video_likes: "7.2 lakh",
        video_views: "1.5 crore views",
        video_ago: "2 years ago",
        video_com: "45,023",
        video_des: `The first 1000 people to click the link will get a free trial of Skillshare's Premium Membership: https://skl.sh/mrnigelng04211 Chef Wang Gang (@chefwang) make his egg fry rice. How does he do? Original weejio ➡️ • 厨师长分享：“香葱蛋炒饭”的家常做法，满满的“锅气”，松散干香！  `
    }
        // {
        //     source: "https://www.youtube.com/embed/tgbNymZ7vqY",
        //     video_name: "Uncle Roger AMAZED by PERFECT EGG FRIED RICE (Chef Wang Gang)",
        //     channel_picture: "https://yt3.ggpht.com/eLCADxKBRj3JGsifnxitZwfsbeV3DDlS3r8SzN5QPT2juw0fTV34T09vIZWfEF3D4JmV2z6hZA=s88-c-k-c0x00ffffff-no-rj",
        //     channel_name: "mrnigelng",
        //     channel_subs: "84.5 lakh subscribers",
        //     video_likes: "7.2 lakhs",
        //     video_views_ago: "1.5 crore views 2 years ago",
        //     video_des: `The first 1000 people to click the link will get a free trial of Skillshare's Premium Membership: https://skl.sh/mrnigelng04211 Chef Wang Gang (@chefwang) make his egg fry rice. How does he do? Original weejio ➡️ • 厨师长分享：“香葱蛋炒饭”的家常做法，满满的“锅气”，松散干香！  `
        // },
        // {
        //     source: "https://www.youtube.com/embed/tgbNymZ7vqY",
        //     video_name: "Uncle Roger AMAZED by PERFECT EGG FRIED RICE (Chef Wang Gang)",
        //     channel_picture: "https://yt3.ggpht.com/eLCADxKBRj3JGsifnxitZwfsbeV3DDlS3r8SzN5QPT2juw0fTV34T09vIZWfEF3D4JmV2z6hZA=s88-c-k-c0x00ffffff-no-rj",
        //     channel_name: "mrnigelng",
        //     channel_subs: "84.5 lakh subscribers",
        //     video_likes: "7.2 lakhs",
        //     video_views_ago: "1.5 crore views 2 years ago",
        //     video_des: `The first 1000 people to click the link will get a free trial of Skillshare's Premium Membership: https://skl.sh/mrnigelng04211 Chef Wang Gang (@chefwang) make his egg fry rice. How does he do? Original weejio ➡️ • 厨师长分享：“香葱蛋炒饭”的家常做法，满满的“锅气”，松散干香！  `
        // }
    ])
    const [comments, setComments] = useState([
        {
            profile_picture: "https://yt3.ggpht.com/ytc/APkrFKarqa816g36kHFbLRtYei8Ykt45ddd6Sy2RmmtJUQ=s88-c-k-c0x00ffffff-no-rj",
            acc_name: "@chefwang",
            com_ago: "2 years ago",
            comment: "欢迎穿着四伯爷的同款背心来中国吃我做的蛋炒饭! If you come to China in Uncle Si same styled sleeveless shirt, I'd love to treat you with my homemade egg fried rice!",
            com_likes: "1.1 lakh",
            com_replies: "468 replies"
        },
        {
            profile_picture: "https://yt3.ggpht.com/ZituR_GEa775ikSot9mc44a_iZ8TeZHFfY7BKxR-eygMeWgGXTRdX1rnW225VMODE3IwxsOw=s88-c-k-c0x00ffffff-no-rj",
            acc_name: "@TheRealGuywithoutaMustache",
            com_ago: "1 year ago",
            comment: "It means the world to see Uncle Roger be impressed by someone's cooking",
            com_likes: "5.6K",
            com_replies: "27 replies"
        },
        {
            profile_picture: "https://yt3.ggpht.com/ytc/APkrFKYn_Cfx3FQDMQ4LiDsNTjm7Esg6BC8CH-47zNgK2-1QJrDDHWPpz8G6S2NJDYTO=s88-c-k-c0x00ffffff-no-rj",
            acc_name: "@TylerVey",
            com_ago: "4 weeks ago",
            comment: "His uncle tasting the rice and loving it is somehow the most heartwarming thing in Uncle Roger’s channel.",
            com_likes: "27",
            com_replies: "1 reply"
        },
        {
            profile_picture: "https://yt3.ggpht.com/pNV1P8xwvu2x5bF8lASnc5k6S74zIp5nA8_8baju-JJlX-C87tTJhYLtahtDtVcIno6DElXdWQ=s88-c-k-c0x00ffffff-no-rj",
            acc_name: "@joshuaerb7919 ",
            com_ago: "11 months ago",
            comment: "Mad respect for this man, his technique and knowledge is apparent! Keep up the good work my friend 👑",
            com_likes: "1.7k",
            com_replies: "11 replies"
        },
        {
            profile_picture: "https://yt3.googleusercontent.com/VqGkPKdp-JnA4XEoqphmsrJygoPfAib0c82Ky3NMbei1Pc72ygCJZDetEwTZYPCusTJFcIH77Q=s176-c-k-c0x00ffffff-no-rj",
            acc_name: "@marcyong9736",
            com_ago: "1 year ago (edited)",
            comment: "For those who don't know, he needs to change the oil because earlier he 'seasoned' the wok.Which means heating it up so much, the oil exceeds the smoking point, ending up with a burnt flavor.  So removing the burnt oil and adding fresh oil gets rid of that unpleasant taste.FYI, I used to make egg fried rice at a chinese restaurant for years.",
            com_likes: "4.3K",
            com_replies: "51 replies"
        },

    ])
    const [content, setContent] = useState([
        {
            thumbnail: "https://i.ytimg.com/vi/AkShamwqkUc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqKjmxjjG9m6BwAkzlc8aMEmggyQ",
            channel_pp: "https://yt3.ggpht.com/ytc/APkrFKayJU7KdMw6rQtw4v1E8sbXAkMAepaFnRQ1CfBH=s88-c-k-c0x00ffffff-no-rj",
            video_name: "When ICC & BCCI went to War | The Politics, The Scandal, The Controversy that Shaped Cricket | DRS",
            channel_name: "Cricket Raaz English",
            views: "6.2Lakh views . 2 months ago",
            duration: "10:50"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/vtmvlMHcKPY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBU1W9beKwWNd2yc8ILdY4AAA57CQ",
            channel_pp: "https://yt3.ggpht.com/ytc/APkrFKbrRZQxlRNefbqM_bY2N2l-DXJtiQu1X0xe7HRjPg=s68-c-k-c0x00ffffff-no-rj",
            video_name: "Saransh Goila's Difficult Butter Chicken Pressure Test | MasterChef Australia | MasterChef World",
            channel_name: "MasterChef World",
            views: "3.2lakh views . 5 months ago",
            duration: "11:14"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/XuaWwmixSMA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQ1TKoyqa03INVo7zcD77MF9Tmig",
            channel_pp: "https://yt3.ggpht.com/g-wvjr-bjcSpkoVITz0aeVeGYmXG2arrk8ijmQbZVgqX5CZr-AwsZOqJuGK-ZPUWdsZcI_jv=s68-c-k-c0x00ffffff-no-rj",
            video_name: "4G SIM Uruttu Watch Roast 🔥 - Android Games in China Watch  ⌚  இது Worth-Ah? 🤔",
            channel_name: "Honestly by Tanmay Bhatt",
            views: "456K views . 7 days ago",
            duration: "12:21"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/iJ3PDnrdtfw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbk4eAAUm8pIG3l31x0_DulDkCvw",
            channel_pp: "https://yt3.ggpht.com/zgMN9BuSQByG1SrpmLwcNB3MQhjDhS_pl9H1h7TaRievMfS4UpU7Z36j77z5_hnIW4N8uFX3NA=s68-c-k-c0x00ffffff-no-rj",
            video_name: "Soldier: The Revisit ft. @OnlyDesi | Bobby Deol, Preity Zinta | Netflix India",
            channel_name: "Netflix India",
            views: "17lakh views . 8 months ago",
            duration: "6:19"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/lv1SpwwJEW8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbMURwEZGIhh058AoMS5oej-_IiA",
            channel_pp: "https://yt3.ggpht.com/ytc/APkrFKZqhfiAGkZTxw8v9K22Fgf973LhJ50hfbYR5I6Ogg=s68-c-k-c0x00ffffff-no-rj",
            video_name: "Gaza, explained",
            channel_name: "Vox",
            views: "21lakh views . 2 days ago",
            duration: "15:51"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/t7wSjy9Lv-o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5NUmJk-lLZOlr8d7MgbOXSdz20w",
            channel_pp: "https://yt3.ggpht.com/ndSKSYWG-GB0fIJbESdAX_Fx5ZmA9yH0Vcl4UegQEVyerflaGnPUp5A8HcyfVkdNnHKVcI-EsQ=s68-c-k-c0x00ffffff-no-rj",
            video_name: "Coke Studio Bharat | Khalasi | Aditya Gadhvi x Achint",
            channel_name: "Coke Studio Bharat ",
            views: "4.7crore views . 3 months ago",
            duration: "4:25"
        },{
            thumbnail: "https://i.ytimg.com/vi/AkShamwqkUc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqKjmxjjG9m6BwAkzlc8aMEmggyQ",
            channel_pp: "https://yt3.ggpht.com/ytc/APkrFKayJU7KdMw6rQtw4v1E8sbXAkMAepaFnRQ1CfBH=s88-c-k-c0x00ffffff-no-rj",
            video_name: "When ICC & BCCI went to War | The Politics, The Scandal, The Controversy that Shaped Cricket | DRS",
            channel_name: "Cricket Raaz English",
            views: "6.2Lakh views . 2 months ago",
            duration: "10:50"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/vtmvlMHcKPY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBU1W9beKwWNd2yc8ILdY4AAA57CQ",
            channel_pp: "https://yt3.ggpht.com/ytc/APkrFKbrRZQxlRNefbqM_bY2N2l-DXJtiQu1X0xe7HRjPg=s68-c-k-c0x00ffffff-no-rj",
            video_name: "Saransh Goila's Difficult Butter Chicken Pressure Test | MasterChef Australia | MasterChef World",
            channel_name: "MasterChef World",
            views: "3.2lakh views . 5 months ago",
            duration: "11:14"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/XuaWwmixSMA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQ1TKoyqa03INVo7zcD77MF9Tmig",
            channel_pp: "https://yt3.ggpht.com/g-wvjr-bjcSpkoVITz0aeVeGYmXG2arrk8ijmQbZVgqX5CZr-AwsZOqJuGK-ZPUWdsZcI_jv=s68-c-k-c0x00ffffff-no-rj",
            video_name: "4G SIM Uruttu Watch Roast 🔥 - Android Games in China Watch  ⌚  இது Worth-Ah? 🤔",
            channel_name: "Honestly by Tanmay Bhatt",
            views: "456K views . 7 days ago",
            duration: "12:21"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/iJ3PDnrdtfw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbk4eAAUm8pIG3l31x0_DulDkCvw",
            channel_pp: "https://yt3.ggpht.com/zgMN9BuSQByG1SrpmLwcNB3MQhjDhS_pl9H1h7TaRievMfS4UpU7Z36j77z5_hnIW4N8uFX3NA=s68-c-k-c0x00ffffff-no-rj",
            video_name: "Soldier: The Revisit ft. @OnlyDesi | Bobby Deol, Preity Zinta | Netflix India",
            channel_name: "Netflix India",
            views: "17lakh views . 8 months ago",
            duration: "6:19"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/lv1SpwwJEW8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbMURwEZGIhh058AoMS5oej-_IiA",
            channel_pp: "https://yt3.ggpht.com/ytc/APkrFKZqhfiAGkZTxw8v9K22Fgf973LhJ50hfbYR5I6Ogg=s68-c-k-c0x00ffffff-no-rj",
            video_name: "Gaza, explained",
            channel_name: "Vox",
            views: "21lakh views . 2 days ago",
            duration: "15:51"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/t7wSjy9Lv-o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5NUmJk-lLZOlr8d7MgbOXSdz20w",
            channel_pp: "https://yt3.ggpht.com/ndSKSYWG-GB0fIJbESdAX_Fx5ZmA9yH0Vcl4UegQEVyerflaGnPUp5A8HcyfVkdNnHKVcI-EsQ=s68-c-k-c0x00ffffff-no-rj",
            video_name: "Coke Studio Bharat | Khalasi | Aditya Gadhvi x Achint",
            channel_name: "Coke Studio Bharat ",
            views: "4.7crore views . 3 months ago",
            duration: "4:25"
        },{
            thumbnail: "https://i.ytimg.com/vi/lv1SpwwJEW8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbMURwEZGIhh058AoMS5oej-_IiA",
            channel_pp: "https://yt3.ggpht.com/ytc/APkrFKZqhfiAGkZTxw8v9K22Fgf973LhJ50hfbYR5I6Ogg=s68-c-k-c0x00ffffff-no-rj",
            video_name: "Gaza, explained",
            channel_name: "Vox",
            views: "21lakh views . 2 days ago",
            duration: "15:51"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/t7wSjy9Lv-o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5NUmJk-lLZOlr8d7MgbOXSdz20w",
            channel_pp: "https://yt3.ggpht.com/ndSKSYWG-GB0fIJbESdAX_Fx5ZmA9yH0Vcl4UegQEVyerflaGnPUp5A8HcyfVkdNnHKVcI-EsQ=s68-c-k-c0x00ffffff-no-rj",
            video_name: "Coke Studio Bharat | Khalasi | Aditya Gadhvi x Achint",
            channel_name: "Coke Studio Bharat ",
            views: "4.7crore views . 3 months ago",
            duration: "4:25"
        }
    ])

    return (
        <div>
            <Header />
            <div id='video_screen'>
                <div id='video_primary'>
                    <div id="playable">
                        <iframe src="https://www.youtube.com/embed/5M_Z0ARqol8" title='video'>
                        </iframe>
                    </div>
                    <div id='below'>
                        {video.length && video.map((vid) => (

                            <div id='channel_details'>
                                <div id='vid_name'>{vid.video_name}</div>
                                <div id='chanel_details_main'>
                                    <div id='flex'>
                                        <div id='c_d_m_r'>
                                            <div id='channel_picture'>
                                                <img src={vid.channel_picture} alt='' />

                                            </div>
                                            <div id='channel_n_m'>
                                                <p id='channel_name'>{vid.channel_name}</p>
                                                <p id='channel_subs'>{vid.channel_subs}</p>
                                            </div>


                                        </div>
                                        <div id='buttons'>
                                            <button id='join_button'>Join</button>
                                            <button id='subscribe_button'>Subscribe</button>
                                        </div>
                                    </div>
                                    <div id='like_share'>
                                        <div id='likes'>
                                            <div id='likes_main' >
                                                <Like />
                                                <p>{vid.video_likes}</p>
                                            </div>

                                            <div id='line'></div>
                                            <div id='dislike'>     <Dislike /></div>


                                        </div>
                                        <div id='share'>
                                            <Share />
                                            <p>Share</p>

                                        </div>
                                        <div id='menu'>
                                            <div>    <Menu /></div>
                                        </div>


                                    </div>

                                </div>
                                <div id="video_description">
                                    <div id="video_description_main">
                                        <div id="video_des_">
                                            <div id="v_views">{vid.video_views}</div>&nbsp;
                                            <div id='v_ago'>{vid.video_ago} </div>



                                        </div>
                                        <p id="v_des">{vid.video_des} <span id="more">...more</span></p>
                                    </div>
                                </div>
                                <div id='comments'>
                                    <div id='comments_header'>
                                        <div id='comments_header_top'>
                                            <div id='comments_count'>{vid.video_com}</div>&nbsp;&nbsp;
                                            <p>Comments</p>

                                        </div>
                                        <div id='comments_sort'>
                                            <div id='sort_'>
                                                <Sort />
                                            </div>
                                            <p>Sort by</p>
                                        </div>
                                    </div>
                                    <div id="comment_add" >
                                        <div id="comment_main">
                                            <div id="comment_profile_picture"><img src="https://yt3.ggpht.com/yti/ADpuP3OiJdUniNEOMMC4tDBh4QBe2oHt1Jfnpfe7MA=s88-c-k-c0x00ffffff-no-rj" alt="" /></div>
                                            <div id="comment_input"><input type="text" placeholder="Add a comment..." /></div>
                                        </div>
                                    </div>

                                    {comments.length && comments.map((comment) => (
                                        <div id="comment_main">

                                            <div id="comment_profile_picture"><img src={comment.profile_picture} alt="" /></div>

                                            <div id="mvc-cs-ac-text">

                                                <div id="comment_profile">
                                                    <p id="comment_profile_name">{comment.acc_name}</p>
                                                    <p id="comment_posted">{comment.com_ago}</p>
                                                </div>

                                                <p id="comments_">{comment.comment}</p>

                                                <div id="comment_likes">
                                                    <div id="comment_like"><Like /></div>
                                                    <p id="comment_like_count">{comment.com_likes}</p>
                                                    <div id="comment_dislike"><Dislike /></div>
                                                    <p id="comment_reply">Reply</p>
                                                </div>

                                                <div id="comment_replies">
                                                    <div id="comments_arrow_down"><i class="fa-solid fa-sort-down fa-sm"></i></div>
                                                    <p id="comments_reply_text">{comment.com_replies}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>


                        ))}

                    </div>
                </div>
                <div id='video_secondary'>
                <div id="video_suggestions">
          <div id="video_suggestions_main">
            {content.length && content.map((con) => (
              <div id="video_suggest">
                <div id="video_thumbnail_main">
                  <div id="v_thumbnail"><img src={con.thumbnail} alt="" /></div>
                  <p id="v_duration">{con.duration}</p>
                </div>
                <div id="v_description">
                  <p id="v_name">{con.video_name}</p>
                  <p id="v_channel_name">{con.channel_name}</p>
                  <div id="v_views_main">
                    <p id="v_views">{con.views}</p>
                  
                    <p id="v_ago">{}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
                </div>
            </div>
        </div>
    )
}

export default Video


