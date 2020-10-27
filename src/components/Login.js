import React from 'react'
import './Login.css'
import { loginUrl } from './spotify'

function Login() {
    return (
        <div className="login">
            <img className="login-image" src="https://png.pngtree.com/png-clipart/20190515/original/pngtree-music-and-live-music-logo-with-neon-light-effect-vector-png-image_3669646.jpg" alt="site logo" />
            <a  href={loginUrl} className="login-button">Login with spotify </a>
        </div>
    )
}

export default Login
