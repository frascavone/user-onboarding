import React from 'react';
import { PageFooter } from '../layout/PageFooter';
import { PageHeader } from '../layout/PageHeader';
import './InvestmentPlans.scss';
export const InvestmentPlans = (props) => {
  return (
    <React.Fragment>
      <section className="investment-plans">
        <PageHeader step={props.step} />
        <div className="page-content">
          <div className="title-description">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </div>
          <h4>Ho much are you planning to invest in this year?</h4>
          <div className="row">
            <div className="form-control">
              <label htmlFor="from">From</label>
              <input type="text" id="from" />
            </div>
            <div className="form-control">
              <label htmlFor="to">To</label>
              <input type="text" id="to" />
            </div>
          </div>
          <input type="range" min="1" max="100" class="slider" id="myRange" />
          <h3>Are you an accredited investor?</h3>
          <div class="investor">
            <button>
              <input type="radio" name="isIvestor" id="isInvestor" />
              <label htmlFor="isInvestor">Yes</label>
            </button>
            <button>
              <input type="radio" name="isIvestor" id="isNotInvestor" />
              <label htmlFor="isNotInvestor">No</label>
            </button>
          </div>
        </div>
        <PageFooter step={props.step} onclick={props.onClick} />
      </section>
    </React.Fragment>
  );
};
