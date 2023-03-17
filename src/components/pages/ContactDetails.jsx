import React from 'react';
import { PageFooter } from '../layout/PageFooter';
import { PageHeader } from '../layout/PageHeader';
import { TitleDescription } from '../TitleDescription';
import styles from './ContactDetails.module.scss';

export const ContactDetails = (props) => {
  return (
    <React.Fragment>
      <PageHeader step={props.currentStep} />
      <div className={styles['contact-details']}>
        <TitleDescription
          title="Contact Details"
          description="Welcome to United Properties, we are glad to see you! Let’s get started by letting us know a little bit about you"
        />
        <div className={styles.form}>
          <div className={styles.row}>
            <div
              className={`${styles['form-control']}  ${styles['form-control__fullname']}`}
            >
              <label htmlFor="fullName">Full name</label>
              <input
                type="text"
                id="fullName"
                value={props.values.fullName}
                onChange={props.onChange('fullName')}
              />
            </div>
            <div
              className={`${styles['form-control']}  ${styles['form-control__phone']}`}
            >
              <select name="phone" id="phone">
                <option value="it">🇮🇹</option>
              </select>
              <input type="tel" id="phone" />
            </div>
          </div>
          <div className={styles['form-control']}>
            <label htmlFor="email">Email address</label>
            <input type="text" id="email" />
          </div>
          <div className={styles['form-control']}>
            <label htmlFor="country">Country</label>
            <select name="countries" id="country">
              <option value="ukraine">Ukraine</option>
            </select>
          </div>
        </div>
        <TitleDescription
          title="Privacy Policy"
          description="We know you care about how your personal information is used and shared, so we take your privacy seriously"
          second
        >
          <a href="#">Expand privacy policy &rarr;</a>
        </TitleDescription>
      </div>
      <PageFooter
        currentStep={props.currentStep}
        nextStep={props.nextStep}
        previousStep={props.previousStep}
      />
    </React.Fragment>
  );
};
