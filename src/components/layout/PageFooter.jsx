import React from 'react';

export const PageFooter = (props) => {
  return (
    <React.Fragment>
      <footer>
        {props.step === 1 && <a href="#">&larr; Back to the homepage</a>}
        {props.step > 1 && <a href="#">&larr; Back to the previous step</a>}
        <div className="actions">
          <button className="skip">Skip for now</button>
          {props.step >= 1 && props.step < 3 && (
            <button className="next" onClick={props.onClick}>
              Next step &rarr;
            </button>
          )}
          {props.step === 3 && <button className="next">Finish</button>}
        </div>
      </footer>
    </React.Fragment>
  );
};
