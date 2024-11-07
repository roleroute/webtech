import React from 'react';
import './Card.css';


const Card = (props) => {
    return (
        <div className="card">
            <div className="icon">
                {props.icons}
            </div>
            <h3 className="title">{props.name}</h3>
            <p className="description">
               {props.content}
            </p>
        </div>
    );
};

export default Card;
