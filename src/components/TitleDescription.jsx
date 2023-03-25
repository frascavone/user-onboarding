import React from 'react';

export const TitleDescription = ({ title, description, second, children }) => {
  return (
    <React.Fragment>
      <div className="title-description">
        {!second && <h2>{title}</h2>}
        {second && <h3>{title}</h3>}
        <p>{description}</p>
        {children}
      </div>
    </React.Fragment>
  );
};
