import React from 'react';

export const ProgressItem = ({ isActive, pagename, isLast }) => {
  return (
    <React.Fragment>
      <div className={`progress__item ${isActive ? 'active' : ''}`}>
        <div className={`progress__item__square ${isActive ? 'active' : ''}`}>
          <span
            className={`progress__item__dot ${isActive ? 'active' : ''}`}
          ></span>
        </div>
        <div className="progress__item__pagename">{pagename}</div>
        <div
          className={`progress__item__dash ${isLast ? 'hidden' : ''} ${
            isActive ? 'active' : ''
          }`}
        ></div>
        <div
          className={`progress__item__dash ${isLast ? 'hidden' : ''} ${
            isActive ? 'active' : ''
          }`}
        ></div>
      </div>
    </React.Fragment>
  );
};
