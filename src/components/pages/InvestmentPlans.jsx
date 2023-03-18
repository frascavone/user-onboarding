import React from 'react';
import { PageFooter } from '../layout/PageFooter';
import { PageHeader } from '../layout/PageHeader';
import { TitleDescription } from '../TitleDescription';

export const InvestmentPlans = ({
  step,
  onChange,
  previousStep,
  nextStep,
  state,
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
          <div className="form-control">
            <label htmlFor="from">
              From
              <input
                type="text"
                id="from"
                value={state.from}
                onChange={onChange('from')}
              />
            </label>
          </div>
          <div className="form-control">
            <label htmlFor="to">
              To
              <input
                type="text"
                id="to"
                value={state.to}
                onChange={onChange('to')}
              />
            </label>
          </div>
        </div>
        <div className="slider">
          <div className="slider__bar"></div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="slider__fill"></div>
        </div>
        <datalist id="plans">
          <option value="10" label="$10,000"></option>
          <option value="50" label="$50,000"></option>
          <option value="100" label="$100,000"></option>
          <option value="200" label="$200,000"></option>
          <option value="500" label="$500,000"></option>
          <option value="1000" label="$1,000,000+"></option>
        </datalist>
        {/* <input
            id="investmentRange"
            type="range"
            min="10"
            max="1000"
            name="range"
            list="plans"
          /> */}
        <h3>Are you an accredited investor?</h3>
        <div className="investor">
          <input
            type="radio"
            name="isInvestor"
            id="isInvestor"
            value={true}
            onInput={onChange('isInvestor')}
          />
          <label htmlFor="isInvestor">Yes</label>
          <input
            type="radio"
            name="isInvestor"
            id="isNotInvestor"
            value={false}
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
