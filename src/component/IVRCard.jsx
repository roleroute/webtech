import React from 'react';

const IVRCard = ({data}) => {
  return (
    <div className="IVR-card">
      <div className="IVR-card-icon">
        <img src={data.img} alt="" />
      </div>
      <h3 className="IVR-card-title">{data.title}</h3>
      <p className="IVR-card-description">
        Our Voice Call/SMS Panel comes with detailed report features from where you can download the live reports.
      </p>
      
      
    </div>
  );
};

export default IVRCard;
