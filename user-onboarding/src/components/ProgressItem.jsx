import React from 'react';

export const ProgressItem = (props) => {
  const isActive = props.isActive;
  return (
    <React.Fragment>
      <div className={`progress__item ${isActive ? 'active' : ''}`}>
        <div className="progress__item__pagename">
          <div className={`progress__item__square ${isActive ? 'active' : ''}`}>
            <span
              className={`progress__item__dot ${isActive ? 'active' : ''}`}
            ></span>
          </div>
          {props.pagename}
        </div>
        <div
          className={`progress__item__dash ${props.isLast ? 'hidden' : ''} ${
            isActive ? 'active' : ''
          }`}
        ></div>
        <div
          className={`progress__item__dash ${props.isLast ? 'hidden' : ''} ${
            isActive ? 'active' : ''
          }`}
        ></div>
      </div>
    </React.Fragment>
  );
};
