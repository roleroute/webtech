import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";

const Card6 = (props) => {
    return (
        <>
            <div className="card6-box">
                <div className="card6-img">
                    <img src={props.image} alt="" />
                </div>
                <div className="card6-content">
                    <h3>{props.title} </h3>

                    <a href={props.id}>Read More <MdArrowRightAlt /></a> 
                    </div>

                </div>
            </>
            )
}

            export default Card6
