import React from 'react'
import './Header.css'
import { Avatar } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
function Header() {
    return (
        <div className="header">
            <div className="header-row row-one">
            </div>

            <div className="header-row row-two">
               
                <Avatar id="photo"src="https://media-exp1.licdn.com/dms/image/C4D03AQHeZuu5PGQzYw/profile-displayphoto-shrink_100_100/0?e=1609372800&v=beta&t=dTphUTn8oY7zJk7TMXUpJw1iBvJ07euIlQGFolWmRBE" />
               
              
               <div  className="header-profile-container">
                 <div className="header-profile-info">
                     <h5>Stephen Plummer</h5>
                     <p className="header-profile-text">Premium</p>
                 </div>
                 
                 <div className="header-follower-text">
                    <p> <strong>145</strong>Tracks</p>
                    <p> <strong>14.5k</strong>Follower</p>
                </div>
            </div>
          
            </div>



            
        </div>
    )
}

export default Header
