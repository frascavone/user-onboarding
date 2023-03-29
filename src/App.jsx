import { initialState, errors, quotes, rangeSteps, countries } from './data';
import { reducer } from './reducer';
import { LeftBlock } from './layout/LeftBlock';
import { ContactDetails } from './pages/ContactDetails';
import { InvestmentPlans } from './pages/InvestmentPlans';
import { InvestmentPreferences } from './pages/InvestmentPreferences';
import { useReducer, useState } from 'react';

function App() {
  const storedStateString = localStorage.getItem('TEMPORARY');
  const storedState = JSON.parse(storedStateString);

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
    <div className="App">
      <LeftBlock step={step} quote={quote} />
      {step === 1 && (
        <ContactDetails
          step={step}
          state={state}
          dispatch={dispatch}
          errors={errors}
          onNext={handleNext}
          countries={countries}
        />
      )}
      {step === 2 && (
        <InvestmentPlans
          step={step}
          state={state}
          rangeSteps={rangeSteps}
          dispatch={dispatch}
          errors={errors}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {step === 3 && (
        <InvestmentPreferences
          step={step}
          state={state}
          dispatch={dispatch}
          onBack={handleBack}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
export default App;
