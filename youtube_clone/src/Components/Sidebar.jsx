import React from 'react'
import "../Components/Sidebar.css"

import homelogo from '../Images/Home.png'
import shorts from '../Images/Shorts.png'
import subscribtions from '../Images/Subscriptions.png'
import channel from '../Images/YourChannel.png'
import history from '../Images/History.png'
import yourvideos from '../Images/YourVideos.png'
import watch from '../Images/WatchLater.png'
import clips from '../Images/clips.png'
import show from '../Images/show.png'
import dot from '../Images/dot.png'
import trending from '../Images/trending.png'
import shopping from '../Images/shopping.png'
import music from '../Images/music.png'
import films from '../Images/films.png'
import live from '../Images/live.png'
import game from '../Images/game.png'
import news from '../Images/news.png'
import sport from '../Images/sport.png'
import learn from '../Images/learn.png'
import fashion from '../Images/fashion.png'
import podcast from '../Images/podcast.png'
import premium from '../Images/premium.png'
import ytmusic from '../Images/ytmusic.png'
import studio from '../Images/studio.png'
import kids from '../Images/kids.png'
import setting from '../Images/setting.png'
import flag from '../Images/flag.png'
import help from '../Images/help.png'
import feedback from '../Images/feedback.png'


const Sidebar = () => {
  return (
    <div id='sidebar'>
    <div id='sside_main'>
      <div id="ss_m_1">
        <div id="ss_m_logo"><img src={homelogo} alt="" /></div>
        <div id="ss_m_name">Home</div>
      </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src={shorts} alt="" /></div>
        <div id="ss_m_name">Shorts</div>
      </div>

      <div id="ss_m">
        <div id="ss_m_logo"><img src={subscribtions} alt="" /></div>
        <div id="ss_m_name">Subscriptions</div>
      </div>
      <div className="mc-horizontal-line"></div>
    <div id='ss_m_text'> You<i class="fa-solid fa-angle-right fa-xs"></i> </div>
     <div id="ss_m">
        <div id="ss_m_logo"><img src={channel} alt="" /></div>
        <div id="ss_m_name">Your Channel</div>
      </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src={history} alt="" /></div>
        <div id="ss_m_name">History</div>
      </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src={yourvideos} alt="" /></div>
        <div id="ss_m_name">Your Videos</div>
      </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src={watch} alt="" /></div>
        <div id="ss_m_name">Watch later</div>
      </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src={clips} alt="" /></div>
        <div id="ss_m_name">Your Clips</div>
      </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src={show} alt="" /></div>
        <div id="ss_m_name">Show more</div>
      </div>
      <div className="mc-horizontal-line"></div>
      <div id='ss_m_text'> Subsciptions </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src='https://yt3.ggpht.com/ytc/APkrFKYV4KHgrKl8ayyBOnJlJw0C3VXeraba0mSqtltECA=s68-c-k-c0x00ffffff-no-rj'style={{borderRadius:"50%"}} alt="" /></div>
        <div id="ss_m_name_2">Netflix</div>
        <div id="ss_m_new"> <img src={dot} alt="" /></div>
        
      </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src='https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s88-c-k-c0x00ffffff-no-rj'style={{borderRadius:"50%"}} alt="" /></div>
        <div id="ss_m_name_2">T-Series</div>
        <div id="ss_m_new"> <img src={dot} alt="" /></div>
        
      </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src='https://yt3.googleusercontent.com/Xu2hZGsG0G1IaFErBLZE-7dLBHZlQV2hHW1VfDf3qkoTZgHhES19wGPGEMcijZpkMAip-ngzjOY=s176-c-k-c0x00ffffff-no-rj-mo'style={{borderRadius:"50%"}} alt="" /></div>
        <div id="ss_m_name_2">blogilates</div>
        <div id="ss_m_new"> <img src={dot} alt="" /></div>
        
      </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src='https://yt3.ggpht.com/nTK6AFZrpjDHKNIHq0zqjkWCs3jm9ttQBAGOfIui0zlz_gQzeqAIOtQKfzbSUIA0Mu15HBDfCg=s88-c-k-c0x00ffffff-no-rj'style={{borderRadius:"50%"}} alt="" /></div>
        <div id="ss_m_name_2">Think School</div>
        <div id="ss_m_new"> <img src={dot} alt="" /></div>
        
      </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src='https://yt3.googleusercontent.com/ytc/APkrFKbhf4UgRd3NjgfMR0EUGsf82eyRb3NOhzP-ruJu_w=s176-c-k-c0x00ffffff-no-rj-mo'style={{borderRadius:"50%"}} alt="" /></div>
        <div id="ss_m_name_2">The Quint</div>
        <div id="ss_m_new"> <img src={dot} alt="" /></div>
        
      </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src='https://yt3.ggpht.com/vE1ESBld6LqHBv7339FuPAn1WBKJR5PFnZRzwqQ78Gp3zxB7seqCw6HfQLJIMTaz-iIjUj72=s88-c-k-c0x00ffffff-no-rj'style={{borderRadius:"50%"}} alt="" /></div>
        <div id="ss_m_name_2">Bruno Mars </div>
        <div id="ss_m_new"> <img src={dot} alt="" /></div>
        
      </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src={show} alt="" /></div>
        <div id="ss_m_name">Show 10 more</div>
      </div>
      <div className="mc-horizontal-line"></div>
      <div id='ss_m_text'> Explore </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src={trending} alt="" /></div>
        <div id="ss_m_name">Trending</div>
      </div>
      
      <div id="ss_m">
        <div id="ss_m_logo"><img src={shopping} alt="" /></div>
        <div id="ss_m_name">Shopping</div>
      </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src={music} alt="" /></div>
        <div id="ss_m_name">Music</div>
      </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src={films} alt="" /></div>
        <div id="ss_m_name">Films</div>
      </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src={live} alt="" /></div>
        <div id="ss_m_name">Live</div>
      </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src={game} alt="" /></div>
        <div id="ss_m_name">Gaming</div>
      </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src={news} alt="" /></div>
        <div id="ss_m_name">News</div>
      </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src={sport} alt="" /></div>
        <div id="ss_m_name">Sport</div>
      </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src={learn} alt="" /></div>
        <div id="ss_m_name">Learning</div>
      </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src={fashion} alt="" /></div>
        <div id="ss_m_name">Fashion & beauty</div>
      </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src={podcast} alt="" /></div>
        <div id="ss_m_name">Podcasts</div>
      </div>
      <div className="mc-horizontal-line"></div>
      <div id='ss_m_text'> More from YouTube </div>

      <div id="ss_m">
        <div id="ss_m_logo"><img src={premium} alt="" /></div>
        <div id="ss_m_name">YouTube Premium</div>
      </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src={studio} alt="" /></div>
        <div id="ss_m_name">YouTube Studio</div>
      </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src={ytmusic} alt="" /></div>
        <div id="ss_m_name">YouTube Music</div>
      </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src={kids} alt="" /></div>
        <div id="ss_m_name">YouTube Kids</div>
      </div>
      <div className="mc-horizontal-line"></div>

      <div id="ss_m">
        <div id="ss_m_logo"><img src={setting} alt="" /></div>
        <div id="ss_m_name">Settings</div>
      </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src={flag} alt="" /></div>
        <div id="ss_m_name">Report history</div>
      </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src={help} alt="" /></div>
        <div id="ss_m_name">Help</div>
      </div>
      <div id="ss_m">
        <div id="ss_m_logo"><img src={feedback} alt="" /></div>
        <div id="ss_m_name">Send feedback</div>
      </div>
      <div className="mc-horizontal-line"></div>
      <div id="hs_m_footer">
       
        <div id="ss_m_name_3">About Press Copyright Contact us Creator Advertise Developers</div>
        <div id="ss_m_name_3"></div>
      </div>

    </div>

  </div>
  )
}

export default Sidebar