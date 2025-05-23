import React from 'react';

const SectionTitle = ({ title, background }) => {
  return (
    <div className="section-title w-100 text-center">
      <h2 className="big-background-text">{background}</h2>
      <h3>{title}</h3>
    </div>
  );
};

export default SectionTitle; 