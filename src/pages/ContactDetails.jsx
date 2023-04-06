import React from 'react';
import {
  validateName,
  validatePhone,
  validateEmail,
  validateCountry,
} from '../js/validators';
import { TitleDescription } from '../components/TitleDescription';
import { useOutletContext } from 'react-router-dom';

export const ContactDetails = () => {
  const { state, countries, errors, touched, thereIsUntouched, dispatch } =
    useOutletContext();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    touched.step1[name] = true;
    if (value.trim() === '') errors[name] = 'This field is required';
    else {
      switch (name) {
        case 'fullName':
          errors[name] = validateName(value);
          break;
        case 'phone':
          if (validatePhone(value) === '') {
            errors[name] = '';
            dispatch({ type: `FORMAT_PHONE`, payload: value });
          }
          errors[name] = validatePhone(value);
          break;
        case 'email':
          errors[name] = validateEmail(value);
          break;
        case 'country':
          errors[name] = validateCountry(value);
          break;
      }
    }
  };

  return (
    <React.Fragment>
      <div className="contact-details">
        <TitleDescription
          title="Contact Details"
          description="Welcome to United Properties, we are glad to see you! Let’s get started by letting us know a little bit about you"
        />
        <div className="row">
          <label className="form-control__fullname">
            Fullname
            <input
              type="text"
              name="fullName"
              value={state.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          <label className="form-control__phone">
            <select name="phone" id="phone" onChange={handleChange}>
              {countries.map((country) => {
                return (
                  <option key={country.dialCode} value={country.dialCode}>
                    {country.flag}
                  </option>
                );
              })}
            </select>
            <input
              type="text"
              name="phone"
              value={state.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
        </div>
        {touched.fullName && errors.fullName && (
          <div data-cy="error-fullName" className="error__message">
            {errors.fullName}
          </div>
        )}
        {touched.phone && errors.phone && (
          <div data-cy="error-phone" className="error__message">
            {errors.phone}
          </div>
        )}
        <label>
          Email
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && (
            <div data-cy="error-email" className="error__message">
              {errors.email}
            </div>
          )}
        </label>
        <label>
          Country
          <select
            type="text"
            name="country"
            value={state.country}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value=""></option>
            {countries.map((country) => {
              return (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              );
            })}
          </select>
          {touched.country && errors.country && (
            <div data-cy="error-country" className="error__message">
              {errors.country}
            </div>
          )}
        </label>
        <TitleDescription
          title="Privacy Policy"
          description="We know you care about how your personal information is used and shared, so we take your privacy seriously"
          second
        >
          <a href="#">Expand privacy policy &rarr;</a>
        </TitleDescription>
        {thereIsUntouched && (
          <div data-cy="error-untouched" className="error__message">
            Please fill all the fields before proceeding to next step.
          </div>
        )}
      </div>
    </React.Fragment>
  );
};
