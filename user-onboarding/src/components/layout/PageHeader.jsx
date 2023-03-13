import React from 'react';

export const PageHeader = (props) => {
  return (
    <React.Fragment>
      <header className="page-header">
        <div className="step">STEP {props.step} OF 3</div>
        <p>
          Lost or have trouble? <a href="#">Get help &rarr;</a>
        </p>
      </header>
    </React.Fragment>
  );
};
