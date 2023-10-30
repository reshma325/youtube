import React, { useState } from 'react'
import "../Components/HomePage.css"
import Header from './Header'
import Sidebar from './Sidebar'


const Homepage = () => {
  // const [vidContent, setVidContent] = useState([
  //   {
  //     img: "https://i.ytimg.com/vi/deQcxldcOog/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGyoZXLK8EnyIZypECn0ZAH3vNtA",
  //     cLogo: "https://yt3.ggpht.com/ytc/APkrFKbGREEBS9tvkobo4vxoV9j-no0Hf9tSGx-vx6vp0Q=s68-c-k-c0x00ffffff-no-rj",
  //     title: "LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
  //     cName: "Sony Music South",
  //     cViews: "2.9M views . 22 hours ago",
  //     duration: "5:14"
  //   },
  //   {
  //     img: "https://i.ytimg.com/vi/sMPcumZJZcI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcW1z2UYd805skgCXg49SVzsakoQ",
  //     cLogo: "https://yt3.ggpht.com/tWGVfHXn5SaAsw-7livA-p-Db6VrWKtLESCqIaR0Gw6cMN47dhUWt3nMPYcoF7ueZBDsUq4atg=s68-c-k-c0x00ffffff-no-rj",
  //     title: "ARTIST vs PHOTOSHOP AI - Are We Being Replaced?",
  //     cName: "Benny Productions",
  //     cViews: "246K views . 6 days ago",
  //     duration: "5:14"
  //   },
  //   {
  //     img: "https://i.ytimg.com/vi/gavPg0uckAQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBhr6uOQliYmgyh-5FSPLmwtlCFJw",
  //     cLogo: "https://yt3.ggpht.com/ytc/APkrFKZZcnhhCsP6n7ePUBbwW32mebQEmJNTsc3P-Gua=s68-c-k-c0x00ffffff-no-rj",
  //     title: "4G SIM Uruttu Watch Roast 🔥 - Android Games in China Watch  ⌚  இது Worth-Ah? 🤔",
  //     cName: "A2D Channel",
  //     cViews: "456K views . 7 days ago",
  //     duration: "12:21"
  //   },
  //   {
  //     img: "https://i.ytimg.com/vi/mPvJkhnB4xg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7AaGgoox1Ns2Lcp1b3wSihPexyQ",
  //     cLogo: "https://yt3.ggpht.com/IQEPDek14iAOcxgIG8QzeToCowLYAZCzZuqD_uH4su-2wrqZgPss2WpytNNMMkst63XTO9aPIA=s68-c-k-c0x00ffffff-no-rj",
  //     title: "How I Edit Photos in Lightroom 2022 (complete workflow tutorial)",
  //     cName: "THAT ICELANDIC GUY.",
  //     cViews: "1M views . 2 years ago",
  //     duration: "26:29"
  //   },
  //   {
  //     img: "https://i.ytimg.com/vi/jN8fMxQ9Hl8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1wFw-DqrTBkOctellXB2Pd-2i2A",
  //     cLogo: "https://yt3.ggpht.com/ytc/APkrFKb37OsytVjF5AIAMDVDCajXNVGXUhoN09AwILML=s68-c-k-c0x00ffffff-no-rj",
  //     title: "SMARTEST MOMENTS IN VALORANT #124",
  //     cName: "VALORANT - Protatomonster",
  //     cViews: "704K views . 2 months ago",
  //     duration: "18:28"
  //   },
  //   {
  //     img: "https://i.ytimg.com/vi/a0Wl9TMyMVI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsQ6WDx0S7WywttisjisjfEch9PA",
  //     cLogo: "https://yt3.googleusercontent.com/ytc/APkrFKYyEObPUL2NQmKlNajLaEhCgLGo-MFAgH3FS57O=s176-c-k-c0x00ffffff-no-rj",
  //     title: "Oddly Satisfying Videos (NEW)",
  //     cName: "ZORRO",
  //     cViews: "26K views . 1 day ago",
  //     duration: "9:44"
  //   }
  // ])

  // // eslint-disable-next-line
  // const [shortsClip, setShortsClip] = useState([
  //   {
  //     img: "https://i.ytimg.com/vi/xj02uqpz-nE/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLBhh918jlcgZWS75F11pJXgdRMSzQ",
  //     title: "Fastest fully automatic Ar15 #223 #rifle #ar15 #gun #viral #shooting #shorts #fullauto",
  //     cViews: "2.5M views",
  //   },
  //   {
  //     img: "https://i.ytimg.com/vi/tVxyas2zoQA/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAJUkil64xD8prDbALzcu9CriJFjw",
  //     title: "Rolex making video | Suriya | Vikram | Kanguva #suriya #rolex #kanguva #vikram #shorts",
  //     cViews: "11M views",
  //   },
  //   {
  //     img: "https://i.ytimg.com/vi/3hVL5Soihl8/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBUw-N6wbzbvOgKWPuQytrUZMxLkA",
  //     title: "Revolver Speed Loader ASMR",
  //     cViews: "10M views",
  //   },
  //   {
  //     img: "https://i.ytimg.com/vi/RzlbKKx84wM/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDibPjprpFETE07wfSPz7jH3kDvqQ",
  //     title: "Hyenas have a Special Ability #hyena",
  //     cViews: "2.5M views",
  //   },
  //   {
  //     img: "https://i.ytimg.com/vi/bFsRXDKBjZQ/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDSCB15HR-Js9D-V6uYozTEA6X46A",
  //     title: "The 1 Tactic EVERY Reyna Player NEEDS to KNOW! - Valorant #shorts",
  //     cViews: "319K views",
  //   },
  // ])
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
        {/* <div className="video-content">
          {vidContent.length && vidContent.map((content) => (
            <div className="video-content-layout">
              <div className="vc-img-layout">
                <div className="vc-img"><img src={content.img} alt="" /></div>
                <div className="time-status">{content.duration}</div>
              </div>
              <div className="vc-details-layout">

                <div className="vc-channel-logo"><img src={content.cLogo} alt="" /></div>
                <div className="vc-details">
                  <div className="vc-title">{content.title}</div>
                  <div className="vc-channel-name">{content.cName}</div>
                  <div className="vc-channel-views">{content.cViews}</div>
                </div>
                <div className="vc-more-details-box">
                  <div className="vc-more-details"><i class="fa-solid fa-ellipsis-vertical"></i></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="shorts-content-bg">
          <div className="shorts-header">
            <div className="shorts-header-text-layout">
              <div className="yt-shorts-logo"><img src={ytShorts} alt="" /></div>
              <p className="shorts-header-text">Shorts</p>
            </div>
            <div className="shorts-close-button"><CloseButtom /></div>
          </div>
        </div>

        <div className="shorts-content-layout">
          {shortsClip.length && shortsClip.map((shorts) => (
            <div className="shorts-content">

              <div className="shorts-img"><img src={shorts.img} alt="" /></div>

              <div className="shorts-details-layout">
                <div className="shorts-details">
                  <div className="shorts-title">{shorts.title}</div>
                  <div className="shorts-channel-views">{shorts.cViews}</div>
                </div>
                <div className="shorts-more-details-box">
                  <div className="shorts-more-details"><i class="fa-solid fa-ellipsis-vertical"></i></div>
                </div>
              </div>
            </div>
          ))
          }
        </div> */}

      

      </div>


    </div>
  )
}

export default Homepage

