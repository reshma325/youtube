import React from 'react'
import "../Components/SignIn.css"
import glogo from '../Images/google.png'
import { useNavigate } from 'react-router'

const SignIn = () => {
    const router = useNavigate()
    return (
        <div id='signin_screen'>
            <div id='signin_main'>
                <div id='signin_box'>
                    <div id='g_logo'>
                        <img src={glogo} alt='' />

                    </div>
                    <div id='signin_text_1'>
                        <p>Sign In</p>
                    </div>
                    <div id='signin_text_2'>
                        <p>To continue to YouTube</p>
                    </div>
                    <div id="signin_box_main">
                        <input type="text" required />
                        <label>Email or phone</label>
                    </div>
                    <p id="signin_f">Forgot email?</p>
                    <div id="signin_box_main">
                        <input type="password" required />
                        <label>Enter your password</label>
                    </div>
                    <div id="signin_forgot">
                        <div id="signin_show">
                            <div id="signin_check"><input type="checkbox" /></div>
                            <p>Show password</p>
                        </div>
                    </div>
                    <p id="signin_f">Forgot password?</p>
                    <div id="signin_guest">
                        <p id="signin_guest_text_1">Not your computer? Use Guest mode to sign in privately.</p>
                        <p id="signin_guest_text_2">Learn more</p>
                    </div>
                    <div id="signin_create">
                        <button id="signin_create_link" onClick={()=>router('/register')}>Create account</button>
                        <button id="signin_next">Next</button>
                    </div>
                </div>

                <div id="signin_country_main">
                    <div id="signin_country">
                        <select>
                            <option value="India">English (United States)</option>
                            <option value="India">English (United Kingdom)</option>
                            <option value="India">मराठी</option>
                            <option value="India">हिन्दी</option>
                            <option value="India">తెలుగు</option>
                            <option value="India">ગુજરાતી</option>
                        </select>
                    </div>
                    <div id="signin_other">
                        <p>Help</p>
                        <p>Privacy</p>
                        <p>Terms</p>
                    </div>
                </div>



            </div>
        </div>

    )
}

export default SignIn