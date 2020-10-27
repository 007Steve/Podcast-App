import React from 'react'
import './MainContainer.css'
import Header from './Header'
import PopluarRow from './PopluarRow'
import PodcastCard from './PodcastCard'
import MusicCard from './MusicCard'
function MainContainer() {
    return (
        <div className="maincontainer">
          <Header/>
          <PopluarRow/>
          <div className="maincontainer-two-column">
            <div className="column column-one">
              <h2>Trending</h2>
                <PodcastCard/>
                <PodcastCard/>
                <PodcastCard/>
                <PodcastCard/>
                <PodcastCard/>
                <PodcastCard/>
                <PodcastCard/>
                <PodcastCard/>
                <PodcastCard/>
                <PodcastCard/>
                <PodcastCard/>
                <PodcastCard/>
              </div>
              <div className="column column-two">
                <h2>Recommened</h2>
                <div className="maincontainer-recommended">
                  <MusicCard/>
                  <MusicCard/>
                  <MusicCard/>
                  <MusicCard/>
                  <MusicCard/>
                  <MusicCard/>
                </div>
              </div>
           </div>
        </div>
    )
}

export default MainContainer
