import React from 'react';

export const Quote = (props) => {
  return (
    <React.Fragment>
      <div className="quote">
        <span className="quote__sign"> &ldquo;</span>
        <p className="quote__text">{props.quote}</p>
        <div className="quote__author">
          <p className="quote__author__name">{props.authorName}</p>
          <p className="quote__author__role">{props.authorRole}</p>
          <p className="quote__logo">
            U<span className="quote__logo--blue">P</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
