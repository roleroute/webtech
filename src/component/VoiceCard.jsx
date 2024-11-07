import React from 'react';

const VoiceCard = ({data}) => {
  return (
    <div className="voice-card">
      <div className="voice-card-icon">
        <img src={data.img} alt="" />
      </div>
      <h3 className="voice-card-title">{data.title}</h3>
      <p className="voice-card-description">
        Our Voice Call/SMS Panel comes with detailed report features from where you can download the live reports.
      </p>
      
      
    </div>
  );
};

export default VoiceCard;
