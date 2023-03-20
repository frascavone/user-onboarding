import React from 'react';

export const PageFooter = (props) => {
  const currentStep = props.step;
  return (
    <React.Fragment>
      <footer className="page-footer">
        {currentStep === 1 && <a href="#">&larr; Back to the homepage</a>}
        {currentStep > 1 && (
          <a href="#" onClick={props.previousStep}>
            &larr; Back to the previous step
          </a>
        )}
        <div className="actions">
          <a href="#" className="skip">
            Skip for now
          </a>
          {currentStep >= 1 && currentStep < 3 && (
            <button type="button" className="next" onClick={props.nextStep}>
              Next step &rarr;
            </button>
          )}
          {currentStep === 3 && (
            <button type="submit" className="next">
              Finish
            </button>
          )}
        </div>
      </footer>
    </React.Fragment>
  );
};
