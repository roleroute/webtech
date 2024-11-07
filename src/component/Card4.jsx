import react from 'react';
import './Card.css';

const Card4 = ({data}) => {
    
    return (
        <div className="card4">
            <div className="icon">
              <img src={data.img} alt="" />
            </div>
            <h3 className="title">{data.title}</h3>
            <p className="description">
                {data.dis}

            </p>

        </div>
    );
};

export default Card4;