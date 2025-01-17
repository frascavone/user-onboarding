import React from 'react';
import { Slider } from '../components/Slider';
import { TitleDescription } from '../components/TitleDescription';
import { useOutletContext } from 'react-router-dom';

export const InvestmentPlans = () => {
  const { state, rangeSteps, dispatch, touched, thereIsUntouched } =
    useOutletContext();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name) {
      touched.step2[name] = true;
      dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
    } else {
      touched.step2.range = true;
      dispatch({ type: `SET_RANGE`, payload: value });
    }
  };

  // const handleChange = (event) => {
  //   const { name } = event.target;
  //   setTouched({ ...touched, [name]: true });

  //   if (event.target.name) {
  //     const { name, value } = event.target;
  //     dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
  //   } else {
  //     const { value } = event.target;
  //     dispatch({ type: `SET_RANGE`, payload: value });
  //   }
  // };

  // const handleBlur = (event) => {
  //   const { name, value } = event.target;
  //   setTouched({ ...touched, [name]: true });

  //   if (value.trim() === '') {
  //     errors[name] = 'This field is required.';
  //   } else if (
  //     !/^(\$)?(\¥)?[1-9]\d*(((,\d{3}){1})?(\€)?(\$)?(\¥)?([A-Z]{3})?)$/.test(
  //       value
  //     )
  //   ) {
  //     errors[name] = 'Please enter a valid currency value.';
  //   } else if (name === 'to' && +value < +state.from) {
  //     errors[name] = '"To" field must be greater than "From"';
  //   } else if (name === 'from' && +value > +state.to) {
  //     errors[name] = '"From" field must be minor than "To"';
  //   } else {
  //     errors[name] = '';
  //   }
  // };

  // const navigate = useNavigate();

  // const onNext = () => {
  //   if (Object.values(errors).some((error) => error !== '')) {
  //     return;
  //   }
  //   if (Object.values(touched).some((value) => value === false)) {
  //     setThereIsUntouched(true);
  //   } else {
  //     navigate('/user-onboarding-investment-preferences', { replace: true });
  //     handleNext();
  //   }
  // };

  return (
    <React.Fragment>
      <div className="investment-plans">
        <TitleDescription
          title="Investment Plans"
          description="Let us know about your investment plans. This will help us get you to the right expert who will help you further"
        />
        <h3>Ho much are you planning to invest in this year?</h3>
        <div className="row">
          {/* <label>
              From
              <input
                type="text"
                name="from"
                value={state.from}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.from && errors.from && (
                <div className="error__message">{errors.from}</div>
              )}
            </label>
            <label>
              To
              <input
                type="text"
                name="to"
                value={state.to}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.to && errors.to && (
                <div className="error__message">{errors.to}</div>
              )}
              </label> */}
        </div>
        <Slider
          name="range"
          from={state.from}
          to={state.to}
          currency={state.currency}
          rangeSteps={rangeSteps}
          onChange={handleChange}
        />
        <h3>Are you an accredited investor?</h3>
        <div className="investor">
          <input
            type="radio"
            name="isInvestor"
            id="isInvestor"
            onInput={handleChange}
          />
          <label htmlFor="isInvestor">Yes</label>
          <input
            type="radio"
            name="isInvestor"
            id="isNotInvestor"
            value={''}
            onInput={handleChange}
            defaultChecked
          />
          <label htmlFor="isNotInvestor">No</label>
        </div>
        {thereIsUntouched && (
          <div className="error__message">
            Please fill all the fields before proceeding to next step.
          </div>
        )}
      </div>
    </React.Fragment>
  );
};
