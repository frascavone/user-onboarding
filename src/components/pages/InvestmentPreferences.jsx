import React from 'react';
import { PageFooter } from '../layout/PageFooter';
import { PageHeader } from '../layout/PageHeader';
import { TitleDescription } from '../TitleDescription';

export const InvestmentPreferences = ({
  step,
  onChange,
  previousStep,
  estates,
}) => {
  return (
    <React.Fragment>
      <PageHeader step={step} />
      <div className="investment-preferences">
        <TitleDescription
          title="Investment preferences"
          description="This will help us figure out what your investment options are so that we can show you only possibly intresting for you deals"
        />
        <h3>What kind of real estate are you intrested in?</h3>
        <div className="choice__cards">
          {estates.map((item, index) => (
            <div key={index} className="card">
              <input
                type="checkbox"
                id={item.type}
                value={item.type}
                onInput={onChange('realEstates')}
              />
              <label htmlFor={item.type}>{item.type}</label>
            </div>
          ))}
        </div>
      </div>
      <PageFooter step={step} previousStep={previousStep} />
    </React.Fragment>
  );
};
