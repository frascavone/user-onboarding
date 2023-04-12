import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  initialState,
  errors,
  touched,
  quotes,
  rangeSteps,
  countries,
} from '../js/data';
import { reducer } from '../js/reducer';
import { useReducer, useState } from 'react';
import { LeftBlock } from '../layout/LeftBlock';
import { StepHeader } from './StepHeader';
import { StepFooter } from './StepFooter';

export const Step = () => {
  // temporary state is stored in localStorage
  const storedState = JSON.parse(localStorage.getItem('TEMPORARY'));

  const [step, setStep] = useState(1);
  const [quote, setQuote] = useState(quotes[0]);

  // if no state is found in localStorage, empty state is provided by initialState
  const [state, dispatch] = useReducer(
    reducer,
    storedState ? storedState : initialState
  );

  const [thereIsUntouched, setThereIsUntouched] = useState(false);

  /* state is updated on every user input and validated on blur.
      If some input field is untouched or invalid the user cannot proceed to next page.  
    */

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
    setQuote((prevQuote) => {
      return quotes[quotes.indexOf(prevQuote) + 1];
    });
    localStorage.setItem('TEMPORARY', JSON.stringify(state));
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
    setQuote((prevQuote) => {
      return quotes[quotes.indexOf(prevQuote) - 1];
    });
  };

  console.log(touched.step1);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const thereIsErrorsOrUntouched = (number) => {
      if (Object.values(errors[`step${number}`]).some((error) => error !== ''))
        return false;
      else if (
        Object.values(touched[`step${number}`]).some((value) => value === false)
      ) {
        setThereIsUntouched(true);
        return false;
      } else return true;
    };
    switch (step) {
      case 1:
        console.log(thereIsErrorsOrUntouched(1));
        if (thereIsErrorsOrUntouched(1)) {
          navigate('/user-onboarding-investment-plans', {
            replace: true,
          });
          handleNext();
        } else return;
        break;
      case 2:
        if (thereIsErrorsOrUntouched(2)) {
          navigate('/user-onboarding-investment-preferences', {
            replace: true,
          });
          handleNext();
        } else return;
        break;
      case 3:
        console.log(`FINAL SUBMIT: ` + state);
        localStorage.setItem('FINAL', JSON.stringify(state));
        break;
      default:
        console.log(`Error: Unknown step(${step})`);
        break;
    }
  };

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
      <div className="user-onboarding">
        <LeftBlock step={step} quote={quote} />
        <form onSubmit={handleSubmit}>
          <StepHeader step={step} />
          <Outlet
            context={{
              step,
              state,
              countries,
              rangeSteps,
              errors,
              touched,
              thereIsUntouched,
              dispatch,
              handleBack,
              handleNext,
            }}
          />
          <StepFooter step={step} onBack={handleBack} />
        </form>
      </div>
    </React.Fragment>
  );
};
