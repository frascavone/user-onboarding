import './App.scss';
import { LeftBlock } from './components/layout/LeftBlock';
import { ContactDetails } from './components/pages/ContactDetails';
import { InvestmentPlans } from './components/pages/InvestmentPlans';
import { useReducer, useState } from 'react';
import { InvestmentPreferences } from './components/pages/InvestmentPreferences';
import { stateReducer } from './reducer';

function App() {
  const steps = [
    {
      stepNum: 1,
      quote: `We care about your time, that's why we created a 3-stage onboarding that will not take more than 5 minutes to complete`,
      authorName: 'William Mac',
      authorRole: 'co founder investor',
    },
    {
      stepNum: 2,
      quote: `Save from thousands to millions on your deal. Secure the best possible. And get independent, unbiased advice for free`,
      authorName: 'Jodie Sears',
      authorRole: "unitedproperties' agent",
    },
    {
      stepNum: 3,
      quote: `United Properties is about fast & easy searching, buying, selling and investing ever — online, with an expert by our side`,
      authorName: 'Ollie Macmahon',
      authorRole: 'managing director',
    },
  ];

  const [currentStep, setCurrentStep] = useState(steps[0]);

  const incrementStep = () => {
    setCurrentStep((prevState) => {
      const stepIndex = prevState.stepNum - 1;
      return steps[stepIndex + 1];
    });
  };

  const decrementStep = () => {
    setCurrentStep((prevState) => {
      const stepIndex = prevState.stepNum - 1;
      return steps[stepIndex - 1];
    });
  };

  const [state, dispatch] = useReducer(stateReducer, {
    fullName: { val: '', isValid: null },
    phone: { prefix: '', val: '', isValid: null },
    email: { val: '', isValid: null },
    country: { val: '', isValid: null },
    from: { val: '$', isValid: null },
    to: { val: '$', isValid: null },
    isInvestor: null,
    realEstates: [
      { type: 'Single family', val: null },
      { type: 'Residential multifamily', val: null },
      { type: 'Commercial retail', val: null },
      { type: 'Commercial industrial', val: null },
      { type: 'Commercial hospitality', val: null },
      { type: 'Commercial warehousing', val: null },
      { type: 'Commercial office', val: null },
      { type: 'Other', val: null },
    ],
  });

  const changeHandler = (inputName) => (e) => {
    dispatch({ type: 'USER_INPUT', input: inputName, value: e.target.value });
  };

  const validateInput = (inputName) => (e) => {
    dispatch({ type: 'VALIDATION', input: inputName, value: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`submitted this: `, state);
  };

  console.log(state);

  return (
    <div className="App">
      <LeftBlock step={currentStep} />
      <form onSubmit={submitHandler} className="page-content">
        {currentStep.stepNum === 1 && (
          <ContactDetails
            step={currentStep.stepNum}
            nextStep={incrementStep}
            onChange={changeHandler}
            onBlur={validateInput}
            state={state}
          />
        )}
        {currentStep.stepNum === 2 && (
          <InvestmentPlans
            step={currentStep.stepNum}
            nextStep={incrementStep}
            previousStep={decrementStep}
            onChange={changeHandler}
            onBlur={validateInput}
            state={state}
          />
        )}
        {currentStep.stepNum === 3 && (
          <InvestmentPreferences
            step={currentStep.stepNum}
            previousStep={decrementStep}
            onChange={changeHandler}
            estates={state.realEstates}
            onBlur={validateInput}
          />
        )}
      </form>
    </div>
  );
}

export default App;
