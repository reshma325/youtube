import React from 'react'
import "../Components/Header.css"
import menu from '../Images/menu.png'
import logo from '../Images/logo.jpeg'
import create from '../Images/Create.png'
import notification from '../Images/Notification.png'
import profile from '../Images/profile.jpeg'
import { useNavigate } from 'react-router'
const Header = () => {
  const router=useNavigate()
  return (
    <div id='header_screen'>
      <div id='header_main'>
        <div id='hmain_l'>
          <div id='hmain_l_l'>
            <img src={menu} alt='' />

          </div>
          <div id='hmain_l_r'>
            <img src={logo} alt='' />
          </div>
        </div>
        <div id='hmain_m'>
          <div id='hmain_m_search'>
            <div id='hmain_m_searchBox'>
              <input placeholder='Search' type='search'></input>
              <div id='hmain_m_searchicon'>
              <i class="fa-solid fa-magnifying-glass" ></i>

              </div>
            </div>


          </div>

        </div>
        <div id='hmain_r'>
          <div id='hmain_r_l'>
            <img src={create} alt=''/>
          </div>
          <div  id='hmain_r_m'>
          <img src={notification} alt=''/>
          </div>
          <div  id='hmain_r_r'>
          <img onClick={()=>router('/signin')} src={profile} alt=''/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header