import React, { useRef } from 'react';
import { PageFooter } from '../layout/PageFooter';
import { PageHeader } from '../layout/PageHeader';
import styles from './ContactDetails.module.scss';

export const ContactDetails = (props) => {
  return (
    <React.Fragment>
      <section className="page-content">
        <PageHeader step={props.currentStep} />
        <div className={styles['contact-details']}>
          <div className="title-description">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </div>
          <form>
            <div className={styles.row}>
              <div
                className={`${styles['form-control']}  ${styles['form-control__fullname']}`}
              >
                <label htmlFor="fullname">Full name</label>
                <input type="text" id="fullname" />
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
          </form>
          <div className="title-description">
            <h2>Privacy Policy</h2>
            <p>
              We know you care about how your personal information is used and
              shared, so we take your privacy seriously
            </p>
            <a href="#">Expand privacy policy &rarr;</a>
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
