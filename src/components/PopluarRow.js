import React from 'react'
import './PopluarRow.css'
import MusicCard from './MusicCard'
function PopluarRow() {
    return (
        
        
        <div className="popluarrow">
            <h2 className="popluarrow-title">Popular</h2>
            <div className="popluarrow-card-container" >
                <MusicCard/>
                <MusicCard/>
                <MusicCard/>
                <MusicCard/>
                <MusicCard/>
                <MusicCard/>
                <MusicCard/>
                <MusicCard/>
            </div>
        
        </div>
       
    )
}

export default PopluarRow
