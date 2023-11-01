import React from 'react'
import "../Components/Register.css"
import glogo from '../Images/google.png'
import { useNavigate } from 'react-router'

const Register = () => {
    const router = useNavigate()
    return (
        <div id='signup_main'>
            <div id='signup_box'>
                <div id='g_logo'>
                    <img src={glogo} alt='' />

                </div>
                <div id='signup_text_1'>
                    <p>Sign In</p>
                </div>
                <div id='signup_text_2'>
                    <p>Create a Google Account </p>
                </div>
                <div id="signup_box_main">
                    <input type="text" required />
                    <label>First Name</label>
                </div>

                <div id="signup_box_main">
                    <input type="text" required />
                    <label>Surname (optional)</label>
                </div>
                <p id="signup_f">Enter your birthday and gender</p>
                <div id="signup_date_main">
                    <div id="signup_date">
                        <input type="text" required />
                        <label>Day</label>
                    </div>
                    <div id="signup_date">
                        <input type="text" required />
                        <label>Month</label>
                    </div>
                    <div id="signup_date">
                        <input type="text" required />
                        <label>Year</label>
                    </div>
                </div>
                <div id="signup_gender">
                    <input type="text" required />
                    <label>Gender</label>
                </div>
                <p id="signup_f">Create your own Gmail Address</p>
                <div id="signup_email">
                    <input type="text" required />
                    <label>Create a Gmail address</label>
                </div>
                <p id="signup_f">Create a strong password</p>
                <div id="signup_pass">
                    <input type="password" required />
                    <label>Password</label>
                </div>
                <div id="signup_cpass">
                    <input type="password" required />
                    <label>Confirm Password</label>
                </div>
                <div id="signup_show">
                    <div id="signup_check"><input type="checkbox" /></div>
                    <p>Show password</p>
                </div>





                <div id="signup_create">
                    {/* <button id="signup_create_link">Create account</button> */}
                    <button id="signup_next" onClick={() => router('/')}>Next</button>
                </div>
            </div>

            <div id="signup_country_main">
                <div id="signup_country">
                    <select>
                        <option value="India">English (United States)</option>
                        <option value="India">English (United Kingdom)</option>
                        <option value="India">मराठी</option>
                        <option value="India">हिन्दी</option>
                        <option value="India">తెలుగు</option>
                        <option value="India">ગુજરાતી</option>
                    </select>
                </div>
                <div id="signup_other">
                    <p>Help</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>
            </div>



        </div>
    )
}

export default Register