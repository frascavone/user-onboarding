import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import { initialState, errors, quotes, rangeSteps, countries } from './data';
import { reducer } from './reducer';
import { useReducer, useState } from 'react';
import { ContactDetails } from './pages/ContactDetails';
import { InvestmentPlans } from './pages/InvestmentPlans';
import { InvestmentPreferences } from './pages/InvestmentPreferences';
import NoPage from './pages/NoPage';
import UserOnboarding from './layout/UserOnboarding';
import Home from './pages/Home';

export default function App() {
  // temporary state is stored in localStorage
  const storedState = JSON.parse(localStorage.getItem('TEMPORARY'));

  const [step, setStep] = useState(1);
  const [quote, setQuote] = useState(quotes[0]);

  // if no state is found in localStorage, empty state is provided by initialState
  const [state, dispatch] = useReducer(
    reducer,
    storedState ? storedState : initialState
  );

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

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('FINAL', JSON.stringify(state));
    console.log(state);
  };

  return (
    // The routes are structured as if the three steps form was just a part of another site.

    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        {/* I choose "user-onboarding-<page-name>" to avoid user 
          ends up on "user-onboarding/" route, which is 
          just LeftBlock component and white space */}
        <Route element={<UserOnboarding step={step} quote={quote} />}>
          <Route
            index
            path="user-onboarding-contact-details"
            element={
              <ContactDetails
                step={step}
                state={state}
                dispatch={dispatch}
                errors={errors}
                onNext={handleNext}
                countries={countries}
              />
            }
          />
          <Route
            path="user-onboarding-investment-plans"
            element={
              <InvestmentPlans
                step={step}
                state={state}
                rangeSteps={rangeSteps}
                dispatch={dispatch}
                errors={errors}
                onNext={handleNext}
                onBack={handleBack}
              />
            }
          />
          <Route
            path="user-onboarding-investment-preferences"
            element={
              <InvestmentPreferences
                step={step}
                state={state}
                dispatch={dispatch}
                onBack={handleBack}
                onSubmit={handleSubmit}
              />
            }
          />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
