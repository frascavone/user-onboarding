import React from 'react';

export const TitleDescription = (props) => {
  const font = { fontSize: props.size };
  return (
    <React.Fragment>
      <div className="title-description">
        <h1 style={font}>{props.title}</h1>
        <p>{props.description}</p>
        {props.children}
      </div>
    </React.Fragment>
  );
};
