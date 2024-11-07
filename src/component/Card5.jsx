import React from 'react';
import './Card5.css';

const Card5 = ({Testimonial}) => {
    return (
        <div className="testimonial-card">
            <p className="quote">
                <span className="quote-mark">“</span> 
                        {Testimonial.content}
                <span className="quote-mark">”</span>
            </p>
            <div className="user-info">
                <img src={Testimonial.img} alt="User Avatar" className="avatar" />
                <p className="user-name">{Testimonial.name}</p>
            </div>
        </div>
    );
}

export default Card5;
