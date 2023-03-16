import React from 'react';

export const PageFooter = (props) => {
  return (
    <React.Fragment>
      <footer>
        {props.currentStep === 1 && <a href="#">&larr; Back to the homepage</a>}
        {props.currentStep > 1 && (
          <a href="#" onClick={props.previousStep}>
            &larr; Back to the previous step
          </a>
        )}
        <div className="actions">
          <button className="skip">Skip for now</button>
          {props.currentStep >= 1 && props.currentStep < 3 && (
            <button type="button" className="next" onClick={props.nextStep}>
              Next step &rarr;
            </button>
          )}
          {props.currentStep === 3 && <button className="next">Finish</button>}
        </div>
      </footer>
    </React.Fragment>
  );
};
