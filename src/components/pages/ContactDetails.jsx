import React from 'react';
import { PageFooter } from '../layout/PageFooter';
import { PageHeader } from '../layout/PageHeader';
import { TitleDescription } from '../TitleDescription';
// import styles from './ContactDetails.module.scss';

export const ContactDetails = ({ step, onChange, nextStep, state }) => {
  return (
    <React.Fragment>
      <PageHeader step={step} />
      <div className="contact-details">
        <TitleDescription
          title="Contact Details"
          description="Welcome to United Properties, we are glad to see you! Let’s get started by letting us know a little bit about you"
        />
        <div className="form">
          <div className="row">
            <div className="form-control form-control__fullname">
              <label htmlFor="fullName">Full name</label>
              <input
                type="text"
                id="fullName"
                value={state.fullName}
                onChange={onChange('fullName')}
              />
            </div>
            <div className="form-control form-control__phone">
              <select name="phone" id="phone">
                <option value="it">🇮🇹</option>
              </select>
              <input
                type="tel"
                id="phone"
                value={state.phone}
                onChange={onChange('phone')}
              />
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email address</label>
            <input
              type="text"
              id="email"
              value={state.email}
              onChange={onChange('email')}
            />
          </div>
          <div className="form-control">
            <label htmlFor="country">Country</label>
            <select
              name="countries"
              id="country"
              value={state.country}
              onChange={onChange('country')}
            >
              <option value="">--Please choose an option--</option>
              <option value="Austria">Austria</option>
              <option value="Belgium">Belgium</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="Italy">Italy</option>
              <option value="Poland">Poland</option>
              <option value="Spain">Spain</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Switzerland">Switzerland</option>
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
      <PageFooter step={step} nextStep={nextStep} />
    </React.Fragment>
  );
};
