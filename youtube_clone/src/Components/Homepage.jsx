import React, { useState } from 'react'
import "../Components/HomePage.css"
import Header from './Header'
import Sidebar from './Sidebar'
import ytShorts from '../Images/redShorts.png'
import close_ from "../Images/close_.png"
import { useNavigate } from 'react-router'


const Homepage = () => {
  const router=useNavigate();
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
    }
  ])

  // eslint-disable-next-line
  const [shorts, setShorts] = useState([
    {
      thumbnail: "https://i.ytimg.com/vi/-Opj4WcjsYI/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCputCqwnvxkSt358Sp6YbvyLVlEw",
      video_name: "Sheldon and Penny know each other very deeply😂",
      views: "21lakh views",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/NmS61959Phc/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLBl4GYi7BSIl5nSvOs7e4bjaJEu1Q",
      video_name: "THE NEW APPLE PENCIL IS WEIRD",
      views: "11lakh views",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/2XL3eeuhvRk/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLAzykGgkSJ6jl9mupSaNhshi6JLmQ",
      video_name: "Nakuul Mehta Shares A TV Set Incident #shorts",
      views: "8.1lakh views",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/ZgYsF2Pl_Eg/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLADu7WcenbaLdaafXaVnbad1eRxcA",
      video_name: "All of us are JUDGING him 😂#tbbt #thebigbangtheory #penny #leonard #raj #shorts",
      views: "2lakh views",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/QgrHaZKgYIA/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAnWt4L_174x_ljjWn3ndtYLH7ukw",
      video_name: "MODERN FAMILY | Alex Comes Out",
      views: "31lakh views",
    },
  ])
  return (

    <div>
      <Header />
      <Sidebar />
      <div id='home_main'>
        <div id='home_subnav'>
          <div id='hscroll'>
            <div id="h_scroll_blank">
            </div>
            <div id="h_scroll_1">

              <p>All</p>
            </div>
            <div id="h_scroll">

              <p>Comedy</p>
            </div>
            <div id="h_scroll">

              <p>Music</p>
            </div>
            <div id="h_scroll">

              <p>Cricket</p>
            </div>
            <div id="h_scroll">

              <p>Gaming</p>
            </div>
            <div id="h_scroll">

              <p>Shows</p>
            </div>
            <div id="h_scroll">

              <p>Bollywood</p>
            </div>
            <div id="h_scroll">

              <p>Thriller</p>
            </div>
            <div id="h_scroll">

              <p>Live</p>
            </div>
            <div id="h_scroll">

              <p>Tech</p>
            </div>
            <div id="h_scroll">

              <p>Dance</p>
            </div>
            <div id="h_scroll">

              <p>Cooking</p>
            </div>
            <div id="h_scroll">

              <p>Travel</p>
            </div>
            <div id="h_scroll">

              <p>Kpop</p>
            </div>
            <div id="h_scroll">

              <p>News</p>
            </div>
            <div id="h_scroll">

              <p>Anime</p>
            </div>
            <div id="h_scroll">

              <p>Reaction</p>
            </div>
            <div id="h_scroll">

              <p>Coding</p>
            </div>
            <div id="h_scroll">

              <p>Fashion</p>
            </div>
            <div id="h_scroll">

              <p>TV</p>
            </div>
            <div id="h_scroll">

              <p>Entertainment</p>
            </div>




          </div>

        </div>
        <div id="content_main">{content.length && content.map((con) => (
            <div onClick={()=>router('/video')} id="content_main_">
              <div id="content_thumbnail_main">
                <div id="content_thumbnail">
                  <img src={con.thumbnail} alt="" />
                  </div>
                <div id="content_duration">
                  {con.duration}
                </div>
              </div>
              <div id="content_details_main">
                <div id="content_channel_pp">
                  <img src={con.channel_pp} alt="" />
                  </div>
                <div id="content_details">
                  <div id="content_video_name">
                    {con.video_name}
                  </div>
                  <div id="content_channel_name">
                    {con.channel_name}
                    </div>
                  <div id="content_views">
                    {con.views}
                    </div>
                </div>
                <div id="content_details_2_main">
                  <div id="content_details_2">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div id="shorts-content-bg">
                  <div id="shorts-head">
                     <div id="sh_text_main">
                        <div id="sh_logo"><img src={ytShorts} alt="" /></div>
                        <p id="sh_text">Shorts</p>
                     </div>
                     <div id="sh_close"><img src={close_} alt="" /></div>
                  </div>
                  </div>




        <div id="shorts_main">
          {shorts.length && shorts.map((short) => (
            <div id="shorts_content">

              <div id="short_thumbnail">
                <img src={short.thumbnail} alt="" />
                </div>

              <div id="short_detail_main">
                <div id="short_detail">
                  <div id="short_video_name">
                    {short.video_name}
                    </div>
                  <div id="short_views">
                    {short.views}
                    </div>
                </div>
                <div id="short_detail_2_main">
                  <div id="short_detail_2">
                    <i class="fa-solid fa-ellipsis-vertical">
                      </i></div>
                </div>
              </div>
            </div>
          ))
          }
        </div>



      </div>


    </div>
  )
}

export default Homepage

