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
          <a href="#" className="skip">
            Skip for now
          </a>
          {props.currentStep >= 1 && props.currentStep < 3 && (
            <button type="button" className="next" onClick={props.nextStep}>
              Next step &rarr;
            </button>
          )}
          {props.currentStep === 3 && (
            <button type="submit" className="next">
              Finish
            </button>
          )}
        </div>
      </footer>
    </React.Fragment>
  );
};
