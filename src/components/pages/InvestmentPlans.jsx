import React from 'react';
import { Input } from '../Input';
import { PageFooter } from '../layout/PageFooter';
import { PageHeader } from '../layout/PageHeader';
import { Slider } from '../Slider';
import { TitleDescription } from '../TitleDescription';

export const InvestmentPlans = ({
  step,
  onChange,
  onBlur,
  previousStep,
  nextStep,
  state,
  rangeSteps,
}) => {
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
          <Input
            label="From"
            type="text"
            id="from"
            value={state.range.from.val}
            isValid={state.range.from.isValid}
            onChange={onChange('from')}
            onBlur={onBlur('from')}
          />
          <Input
            label="To"
            type="text"
            id="to"
            value={state.range.to.val}
            isValid={state.range.to.isValid}
            onChange={onChange('to')}
            onBlur={onBlur('to')}
          />
        </div>
        <Slider
          from={state.range.from.val}
          to={state.range.to.val}
          currency={state.country.currency}
          rangeSteps={rangeSteps}
          onChange={onChange('range')}
        />
        <h3>Are you an accredited investor?</h3>
        <div className="investor">
          <input
            type="radio"
            name="isInvestor"
            id="isInvestor"
            onInput={onChange('isInvestor')}
          />
          <label htmlFor="isInvestor">Yes</label>
          <input
            type="radio"
            name="isInvestor"
            id="isNotInvestor"
            value={''}
            onInput={onChange('isInvestor')}
            defaultChecked
          />
          <label htmlFor="isNotInvestor">No</label>
        </div>
      </div>
      <PageFooter step={step} nextStep={nextStep} previousStep={previousStep} />
    </React.Fragment>
  );
};
