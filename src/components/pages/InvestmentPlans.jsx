import React from 'react';
import { PageFooter } from '../layout/PageFooter';
import { PageHeader } from '../layout/PageHeader';
import styles from './InvestmentPlans.module.scss';

export const InvestmentPlans = (props) => {
  return (
    <React.Fragment>
      <section className="page-content">
        <PageHeader step={props.step} />
        <div className={styles['investment-plans']}>
          <div className="title-description">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </div>
          <h4>Ho much are you planning to invest in this year?</h4>
          <div className="row">
            <div className="form-control">
              <label htmlFor="from">
                From
                <input type="text" id="from" defaultValue={'$'} />
              </label>
            </div>
            <div className="form-control">
              <label htmlFor="to">
                To
                <input type="text" id="to" defaultValue={'$'} />
              </label>
            </div>
          </div>
          <input id="investmentRange" type="range" name="range" list="plans" />
          <datalist id="plans">
            <option label="$10,000"></option>
            <option label="$50,000"></option>
            <option label="$100,000"></option>
            <option label="$200,000"></option>
            <option label="$500,000"></option>
            <option label="$1,000,000+"></option>
          </datalist>
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
