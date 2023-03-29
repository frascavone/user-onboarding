import React from 'react';
import { PageFooter } from '../layout/PageFooter';
import { PageHeader } from '../layout/PageHeader';
import { TitleDescription } from '../components/TitleDescription';

export const InvestmentPreferences = ({
  step,
  state,
  dispatch,
  onBack,
  onSubmit,
}) => {
  const handleChange = (event) => {
    const { id } = event.target;
    dispatch({ type: 'SET_ESTATEOPTIONS', payload: id });
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <PageHeader step={step} />
        <div className="investment-preferences">
          <TitleDescription
            title="Investment preferences"
            description="This will help us figure out what your investment options are so that we can show you only possibly intresting for you deals"
          />
          <h3>What kind of real estate are you intrested in?</h3>
          <div className="choice__cards">
            {Object.keys(state.estateOptions).map((option) => (
              <div key={option} className="card">
                <input type="checkbox" id={option} onInput={handleChange} />
                <label htmlFor={option} id={option} onClick={handleChange}>
                  {option
                    .replace(/([A-Z])/g, ' $1')
                    .charAt(0)
                    .toUpperCase() + option.replace(/([A-Z])/g, ' $1').slice(1)}
                </label>
              </div>
            ))}
          </div>
        </div>
        <PageFooter step={step} onBack={onBack} onSubmit={onSubmit} />
      </form>
    </React.Fragment>
  );
};
