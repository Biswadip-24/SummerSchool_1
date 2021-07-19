import React from "react"

import './title.css'

// Function component
function func(){
    return (
        <div className = 'home-div'>
            <div className = 'title' >Timber</div>
            <div className = 'tagline' style={{paddingBottom:50}}>Preciously carved</div>
        </div>
    );
}

export default func;