import React from 'react';
import { PageFooter } from '../layout/PageFooter';
import { PageHeader } from '../layout/PageHeader';
import { TitleDescription } from '../TitleDescription';
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
        <PageHeader step={props.currentStep} />
        <div className="investment-preferences">
          <TitleDescription
            title="Investment preferences"
            description="This will help us figure out what your investment options are so that we can show you only possibly intresting for you deals"
          />
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
