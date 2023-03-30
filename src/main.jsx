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
  const storedState = JSON.parse(localStorage.getItem('TEMPORARY'));

  const [step, setStep] = useState(1);
  const [quote, setQuote] = useState(quotes[0]);
  const [state, dispatch] = useReducer(
    reducer,
    storedState ? storedState : initialState
  );

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
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route
          // path="user-onboarding"
          element={<UserOnboarding step={step} quote={quote} />}
        >
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
