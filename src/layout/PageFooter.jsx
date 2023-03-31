import React from 'react';
import { Link } from 'react-router-dom';

export const PageFooter = ({ step, onBack, onSubmit }) => {
  return (
    <React.Fragment>
      <footer className="page-footer">
        {step === 1 && <Link to="/">&larr; Back to the homepage</Link>}
        {step === 2 && (
          <Link to="/user-onboarding-contact-details" onClick={onBack}>
            &larr; Back to the previous step
          </Link>
        )}
        {step === 3 && (
          <Link to="/user-onboarding-investment-plans" onClick={onBack}>
            &larr; Back to the previous step
          </Link>
        )}
        <div className="actions">
          <a href="#" className="skip">
            Skip for now
          </a>
          {step === 1 && (
            <button type="submit" onClick={onSubmit} className="next">
              Next step &rarr;
            </button>
          )}
          {step === 2 && (
            <button type="submit" onClick={onSubmit} className="next">
              Next step &rarr;
            </button>
          )}
          {step === 3 && (
            <button onClick={onSubmit} type="submit" className="next">
              Finish
            </button>
          )}
        </div>
      </footer>
    </React.Fragment>
  );
};
