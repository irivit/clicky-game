import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (

<div className="card" value={props.id}  onClick={() => props.handleClick(props.id)}>

    <div className="img-container">
      <img alt={props.name} src={props.image}/>
    </div>
</div>
);


export default CharacterCard;
