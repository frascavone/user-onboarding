import './App.scss';
import { LeftBlock } from './components/layout/LeftBlock';
import { ContactDetails } from './components/pages/ContactDetails';
import { InvestmentPlans } from './components/pages/InvestmentPlans';
import { useState } from 'react';
import { InvestmentPreferences } from './components/pages/InvestmentPreferences';

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

  const [state, setState] = useState({
    step: steps[0],
    fullName: '',
    phone: '',
    email: '',
    country: '',
    from: '$',
    to: '$',
    isInvestor: false,
    realEstates: [
      { type: 'Single family', val: false },
      { type: 'Residential multifamily', val: false },
      { type: 'Commercial retail', val: false },
      { type: 'Commercial industrial', val: false },
      { type: 'Commercial hospitality', val: false },
      { type: 'Commercial warehousing', val: false },
      { type: 'Commercial office', val: false },
      { type: 'Other', val: false },
    ],
  });

  const currentStep = state.step;

  const incrementStep = () => {
    setState((prevState) => {
      const stepIndex = prevState.step.stepNum - 1;
      return {
        ...prevState,
        step: steps[stepIndex + 1],
      };
    });
  };

  const decrementStep = () => {
    setState((prevState) => {
      const stepIndex = prevState.step.stepNum - 1;
      return {
        ...prevState,
        step: steps[stepIndex - 1],
      };
    });
  };

  const changeHandler = (input) => (e) => {
    e.preventDefault();
    setState((prevState) => {
      if (
        input === 'realEstates' &&
        !prevState.realEstates.includes(e.target.value)
      ) {
        const toggledOption = prevState.realEstates.find(
          (el) => el.type === e.target.value
        );
        toggledOption.val = !toggledOption.val;
        return { ...prevState };
      }
      return { ...prevState, [input]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`submitted this: `, state);
  };

  return (
    <div className="App">
      <LeftBlock step={currentStep} />
      <form onSubmit={submitHandler} className="page-content">
        {currentStep.stepNum === 1 && (
          <ContactDetails
            step={currentStep.stepNum}
            nextStep={incrementStep}
            onChange={changeHandler}
            state={state}
          />
        )}
        {currentStep.stepNum === 2 && (
          <InvestmentPlans
            step={currentStep.stepNum}
            nextStep={incrementStep}
            previousStep={decrementStep}
            onChange={changeHandler}
            state={state}
          />
        )}
        {currentStep.stepNum === 3 && (
          <InvestmentPreferences
            step={currentStep.stepNum}
            previousStep={decrementStep}
            onChange={changeHandler}
            estates={state.realEstates}
          />
        )}
      </form>
    </div>
  );
}

export default App;
