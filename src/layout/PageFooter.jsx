import React from 'react';

export const PageFooter = ({ step, onNext, onBack }) => {
  return (
    <React.Fragment>
      <footer className="page-footer">
        {step === 1 && <a href="#">&larr; Back to the homepage</a>}
        {step > 1 && (
          <a href="#" onClick={onBack}>
            &larr; Back to the previous step
          </a>
        )}
        <div className="actions">
          <a href="#" className="skip">
            Skip for now
          </a>
          {step >= 1 && step < 3 && (
            <button type="submit" className="next">
              Next step &rarr;
            </button>
          )}
          {step === 3 && (
            <button type="submit" className="next">
              Finish
            </button>
          )}
        </div>
      </footer>
    </React.Fragment>
  );
};
