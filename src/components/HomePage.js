import React from 'react'
import './HomePage.css'
import SideBar from './SideBar';
import MainContainer from './MainContainer';

function HomePage() {
    return (
        <div className="home">
            <SideBar/> 
            <MainContainer/>
        </div>
    )
}

export default HomePage
