import React from 'react';
import { PageFooter } from '../layout/PageFooter';
import { PageHeader } from '../layout/PageHeader';

export const InvestmentPreferences = (props) => {
  return (
    <React.Fragment>
      <section className="contact-details">
        <PageHeader step={props.step} />
        <h1>{props.title}</h1>
        <PageFooter step={props.step} onclick={props.onClick} />
      </section>
    </React.Fragment>
  );
};
