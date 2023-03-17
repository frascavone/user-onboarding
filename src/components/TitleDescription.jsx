import React from 'react';

export const TitleDescription = (props) => {
  const font = { fontSize: props.size };
  return (
    <React.Fragment>
      <div className="title-description">
        {!props.second && <h2>{props.title}</h2>}
        {props.second && <h3>{props.title}</h3>}
        <p>{props.description}</p>
        {props.children}
      </div>
    </React.Fragment>
  );
};
