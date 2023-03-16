import React from 'react';
import { PageFooter } from '../layout/PageFooter';
import { PageHeader } from '../layout/PageHeader';
import styles from './InvestmentPlans.module.scss';

export const InvestmentPlans = (props) => {
  return (
    <React.Fragment>
      <section className="page-content">
        <PageHeader step={props.currentStep} />
        <div className={styles['investment-plans']}>
          <div className="title-description">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </div>
          <h4>Ho much are you planning to invest in this year?</h4>
          <div className="row">
            <div className={styles['form-control']}>
              <label htmlFor="from">
                From
                <input type="text" id="from" defaultValue={'$'} />
              </label>
            </div>
            <div className={styles['form-control']}>
              <label htmlFor="to">
                To
                <input type="text" id="to" defaultValue={'$'} />
              </label>
            </div>
          </div>
          <div className={styles.slider}>
            <div className={styles['slider__bar']}></div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className={styles['slider__fill']}></div>
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
          <div className={styles.investor}>
            <input type="radio" name="isIvestor" id={styles['isInvestor']} />
            <label htmlFor={styles['isInvestor']}>Yes</label>
            <input type="radio" name="isIvestor" id={styles['isNotInvestor']} />
            <label htmlFor={styles['isNotInvestor']}>No</label>
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
