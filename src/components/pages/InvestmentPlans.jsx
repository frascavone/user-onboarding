import React, { useState } from 'react';
import { Input } from '../Input';
import { PageFooter } from '../layout/PageFooter';
import { PageHeader } from '../layout/PageHeader';
import { Slider } from '../Slider';
import { TitleDescription } from '../TitleDescription';

export const InvestmentPlans = ({
  step,
  state,
  rangeSteps,
  dispatch,
  errors,
  onBack,
  onNext,
}) => {
  const [touched, setTouched] = useState({
    min: false,
    max: false,
  });

  const handleChange = (event) => {
    if (event.target.name) {
      const { name, value } = event.target;
      console.log(name, value);
      dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
    } else {
      const { value } = event.target;
      console.log(value);
      dispatch({ type: `SET_RANGE`, payload: value });
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setTouched({ ...touched, [name]: true });

    if (value.trim() === '') {
      errors[name] = 'This field is required.';
    } else if (!/^\d+(\.\d{1,2})?$/.test(value)) {
      errors[name] = 'Please enter a valid currency value.';
    } else {
      errors[name] = '';
    }
  };

  return (
    <React.Fragment>
      <PageHeader step={step} />
      <div className="investment-plans">
        <TitleDescription
          title="Investment plans"
          description="Let us know about your investment plans. This will help us get you to the right expert who will help you further"
        />
        <h3>Ho much are you planning to invest in this year?</h3>
        <div className="row">
          <label>
            From
            <input
              type="text"
              name="from"
              value={state.from}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.from && errors.from && (
              <div className="error__message">{errors.from}</div>
            )}
          </label>
          <label>
            To
            <input
              type="text"
              name="to"
              value={state.to}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.to && errors.to && (
              <div className="error__message">{errors.to}</div>
            )}
          </label>
        </div>
        <Slider
          name="range"
          from={state.from}
          to={state.to}
          currency={state.currency}
          rangeSteps={rangeSteps}
          onChange={handleChange}
        />
        <h3>Are you an accredited investor?</h3>
        <div className="investor">
          <input
            type="radio"
            name="isInvestor"
            id="isInvestor"
            onInput={handleChange}
          />
          <label htmlFor="isInvestor">Yes</label>
          <input
            type="radio"
            name="isInvestor"
            id="isNotInvestor"
            value={''}
            onInput={handleChange}
            defaultChecked
          />
          <label htmlFor="isNotInvestor">No</label>
        </div>
      </div>
      <PageFooter step={step} onNext={onNext} onBack={onBack} />
    </React.Fragment>
  );
};
