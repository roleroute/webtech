import react from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card2 = ({ data }) => {

    return (
        <div className="card2">
            <div className="icon">
                <img src={data.img} alt="" />
            </div>
            <h3 className="title">
                <Link to={data.link}> 
                    {data.title}
                </Link>

            </h3>
            <p className="description">
                {data.dis}
            </p>

        </div>
    );
};

export default Card2;