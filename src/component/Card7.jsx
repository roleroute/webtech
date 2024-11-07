import react from 'react';
import './Card.css';

const Card7 = (props) => {

    return (
        <>
            <div className="Exclusive-card Exclusive-card2">
                <div className="Exclusive-icon">
                    {props.icons}
                </div>
                <div className="Exclusive-content">
                    <h3>{props.title}</h3>
                    {props.dis}
          
                </div>
            </div>
        </>
    )

};

export default Card7;