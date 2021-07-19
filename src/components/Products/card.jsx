import React from 'react'
import './card.css'

function Card(props){
    return(
        <div className="container">
        <div className="card card-costom">
            <div className = "title-text">
                 <img src = {props.src} alt = "Some image" />
                 <h3  style = {{paddingTop:20 }}>{props.name}</h3>
            </div>
            <div className = "text-area">
                <h5>{props.description}</h5>
            </div>
            <button style = {{marginBottom : 20}} type="button" class="btn btn-success">Success</button>
        </div>
        </div>
    );
}

export default Card;