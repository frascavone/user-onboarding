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

  const countries = [
    { name: 'Austria', currency: 'EUR', dialCode: '+43', flag: 'AT' },
    { name: 'Belgium', currency: 'EUR', dialCode: '+32', flag: 'BE' },
    { name: 'France', currency: 'EUR', dialCode: '+33', flag: 'FR' },
    { name: 'Germany', currency: 'EUR', dialCode: '+49', flag: 'DE' },
    { name: 'Italy', currency: 'EUR', dialCode: '+39', flag: 'IT' },
    { name: 'Japan', currency: 'JPN', dialCode: '+81', flag: 'JP' },
    { name: 'Poland', currency: 'EUR', dialCode: '+48', flag: 'PL' },
    { name: 'Spain', currency: 'EUR', dialCode: '+34', flag: 'ES' },
    { name: 'Switzerland', currency: 'CHF', dialCode: '+41', flag: 'CH' },
    { name: 'Uk', currency: 'EUR', dialCode: '+44', flag: 'UK' },
    { name: 'Ukraine', currency: 'EUR', dialCode: '+380', flag: 'UA' },
    { name: 'United States', currency: 'USD', dialCode: '+1', flag: 'US' },
  ];

  const rangeSteps = [10000, 20000, 50000, 100000, 200000, 500000, 1000000];

  const getCurrencySymbol = (locale, currency) =>
    (0)
      .toLocaleString(locale, {
        style: 'currency',
        currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
      .replace(/\d/g, '')
      .trim();

  const [state, dispatch] = useReducer(stateReducer, {
    fullName: { val: '', isValid: null },
    phone: { val: '', isValid: null },
    email: { val: '', isValid: null },
    country: { val: '', isValid: null, currency: 'EUR' },
    range: {
      from: {
        val: getCurrencySymbol(navigator.language, 'EUR'),
        isValid: null,
      },
      to: {
        val: getCurrencySymbol(navigator.language, 'EUR'),
        isValid: null,
      },
    },
    isInvestor: false,
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
    if (
      (e.target.value !== '' || e.target.value === Boolean) &&
      e.target.value !== undefined
    )
      dispatch({ type: 'USER_INPUT', input: inputName, value: e.target.value });
  };

  const validateInput = (inputName) => (e) => {
    if (e.target.value !== '')
      dispatch({ type: 'VALIDATION', input: inputName, value: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`submitted this: `, state);
  };

  console.log(state.range.from, state.range.to);

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
            countries={countries}
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
            rangeSteps={rangeSteps}
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
