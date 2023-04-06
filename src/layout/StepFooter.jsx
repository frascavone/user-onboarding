import React from 'react';
import { Link } from 'react-router-dom';

export const StepFooter = ({ step, onBack }) => {
  return (
    <React.Fragment>
      <footer className="step-footer">
        {step === 1 && (
          <Link data-cy="backToHome" to="/">
            &larr; Back to the homepage
          </Link>
        )}
        {step === 2 && (
          <Link
            data-cy="backToStep1"
            to="/user-onboarding-contact-details"
            onClick={onBack}
          >
            &larr; Back to the previous step
          </Link>
        )}
        {step === 3 && (
          <Link
            data-cy="backToStep2"
            to="/user-onboarding-investment-plans"
            onClick={onBack}
          >
            &larr; Back to the previous step
          </Link>
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
