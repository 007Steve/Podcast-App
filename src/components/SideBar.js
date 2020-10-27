import React from 'react'
import './SideBar.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AlbumIcon from '@material-ui/icons/Album';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import RadioIcon from '@material-ui/icons/Radio';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar-input-container">
                <input placeholder="search"  type="text"/>
                < SearchIcon/>
            </div>

            <div className="sidebar-music-container">
                <h5>Music</h5>
                <div className="sidebar-icons-container">
                    <div className="sidebar-icons">
                        <MusicNoteIcon/>
                        <p className="sidebar-icons-text">Songs</p>
                    </div>
                   
                    <div className="sidebar-icons">
                        <AlbumIcon/>
                        <p  className="sidebar-icons-text">Albums</p>
                    </div>
                    <div className="sidebar-icons">
                        <LibraryMusicIcon/>
                        <p  className="sidebar-icons-text">Artist</p>
                    </div>
                    <div className="sidebar-icons">
                        <RadioIcon />
                        <p  className="sidebar-icons-text">Podcast</p>
                    </div>
                    <div className="sidebar-icons">
                        <FavoriteBorderIcon />
                        <p  className="sidebar-icons-text">Favorite</p>
                    </div>
                 
                </div>
                
            </div>
            <div className="sidebar-playlist-container ">
                <h5>Your Playlist</h5>
                <p>Podcast</p>
                <p>Podcast</p>
                <p>Podcast</p>
                <p>Podcast</p>
                <p>Podcast</p>
             
                
            </div>
        </div>
    )
}

export default SideBar
