import React from 'react';
import { Input } from '../Input';
import { PageFooter } from '../layout/PageFooter';
import { PageHeader } from '../layout/PageHeader';
import { TitleDescription } from '../TitleDescription';

export const ContactDetails = ({
  step,
  countries,
  onChange,
  onBlur,
  nextStep,
  state,
}) => {
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
            <Input
              type="tel"
              pattern={'^(?:(d{3})|d{3})[- ]?d{3}[- ]?d{4}$'}
              maxLength={15}
              class="form-control__phone"
              id="phone"
              value={state.phone.val}
              isValid={state.phone.isValid}
              onChange={onChange('phone')}
              onBlur={onBlur('phone')}
            >
              <select
                onChange={onChange('phone')}
                // value={state.phone.val}
                name="phone"
                id="phone"
              >
                {countries.map((country) => {
                  return (
                    <option key={country.dialCode} value={country.dialCode}>
                      {country.flag}
                    </option>
                  );
                })}
              </select>
            </Input>
          </div>
          {state.fullName.isValid === false && (
            <p id="invalid__message">
              Please insert your firstname and lastname separated by a space.
            </p>
          )}
          {state.phone.isValid === false && (
            <p id="invalid__message">Please insert a valid phone number.</p>
          )}
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
