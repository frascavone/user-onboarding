import React from 'react';
import { Input } from '../Input';
import { PageFooter } from '../layout/PageFooter';
import { PageHeader } from '../layout/PageHeader';
import { TitleDescription } from '../TitleDescription';
// import styles from './ContactDetails.module.scss';

export const ContactDetails = ({ step, onChange, onBlur, nextStep, state }) => {
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
            <Input
              label="Fullname"
              class="form-control__fullname"
              type="text"
              id="fullName"
              value={state.fullName.val}
              isValid={state.fullName.isValid}
              onChange={onChange('fullName')}
              onBlur={onBlur('fullName')}
            />
            {/* <div className="form-control form-control__fullname">
              <label htmlFor="fullName">Full name</label>
              <input
                type="text"
                id="fullName"
                value={state.fullName.val}
                onChange={onChange('fullName')}
                onBlur={onBlur('fullName')}
              />
              {state.fullName.isValid === false && (
                <p>Per favore ricompila i campi errati.</p>
              )}
            </div> */}
            <Input
              type="tel"
              class="form-control__phone"
              id="phone"
              value={state.phone.val}
              isValid={state.phone.isValid}
              onChange={onChange('phone')}
              onBlur={onBlur('phone')}
            >
              <select name="phone" id="phone">
                <option value="it">🇮🇹</option>
              </select>
            </Input>
          </div>
          <Input
            label="Email"
            type="text"
            id="email"
            value={state.email.val}
            isValid={state.email.isValid}
            onChange={onChange('email')}
            onBlur={onBlur('email')}
          />
          <div
            className={`form-control ${
              state.country.isValid === false ? 'invalid' : ''
            }`}
          >
            <label htmlFor="country">Country</label>
            <select
              name="countries"
              id="country"
              value={state.country.val}
              onChange={onChange('country')}
              onBlur={onBlur('country')}
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
