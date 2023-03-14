import React from 'react';
import { PageFooter } from '../layout/PageFooter';
import { PageHeader } from '../layout/PageHeader';
import './InvestmentPreferences.scss';

export const InvestmentPreferences = (props) => {
  const realEstates = [
    'Single family',
    'Residential multifamily',
    'Commercial retail',
    'Commercial industrial',
    'Commercial hospitality',
    'Commercial warehousing',
    'Commercial office',
    'Other',
  ];
  return (
    <React.Fragment>
      <section className="page-content">
        <PageHeader step={props.step} />
        <div className="investment-preferences">
          <div className="title-description">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </div>
          <h4>What kind of real estate are you intrested in?</h4>
          <div className="choice__cards">
            {realEstates.map((element, index) => (
              <div key={index} className="card">
                <input type="checkbox" id={element.trim().toLowerCase()} />
                <label htmlFor={element.trim().toLowerCase()}>{element}</label>
              </div>
            ))}
          </div>
        </div>
        <PageFooter
          currentStep={props.currentStep}
          nextStep={props.nextStep}
          previousStep={props.previousStep}
        />
      </section>
    </React.Fragment>
  );
};
