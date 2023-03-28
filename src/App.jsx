import './App.scss';
import { initialState, errors, quotes, rangeSteps, countries } from './data';
import { reducer } from './reducer';
import { LeftBlock } from './layout/LeftBlock';
import { ContactDetails } from './pages/ContactDetails';
import { InvestmentPlans } from './pages/InvestmentPlans';
import { InvestmentPreferences } from './pages/InvestmentPreferences';
import { useReducer, useState } from 'react';

function App() {
  const [step, setStep] = useState(1);
  const [quote, setQuote] = useState(quotes[0]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNext = () => {
    if (Object.values(errors).some((error) => error !== '')) return;
    else {
      setStep((prevStep) => prevStep + 1);
      setQuote((prevQuote) => {
        return quotes[quotes.indexOf(prevQuote) + 1];
      });
    }
  };

  const handleBack = () => {
    if (Object.values(errors).some((error) => error !== '')) return;
    else {
      setStep((prevStep) => prevStep - 1);
      setQuote((prevQuote) => {
        return quotes[quotes.indexOf(prevQuote) - 1];
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Final state:', state);
  };

  return (
    <div className="App">
      {step > 1 && (
        <button
          onClick={handleBack}
          className="step-changer step-changer__prev"
        >
          &lt;
        </button>
      )}
      <LeftBlock step={step} quote={quote} />
      <form onSubmit={handleSubmit} className="page-content">
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
      </form>
      {step < 3 && (
        <button
          onClick={handleNext}
          className="step-changer step-changer__next"
        >
          &gt;
        </button>
      )}
    </div>
  );
}
export default App;
