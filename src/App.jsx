import './App.scss';
import { LeftBlock } from './components/layout/LeftBlock';
import { ContactDetails } from './components/pages/ContactDetails';
import { InvestmentPlans } from './components/pages/InvestmentPlans';
import { useState } from 'react';
import { InvestmentPreferences } from './components/pages/InvestmentPreferences';

function App() {
  const quotes = [
    {
      quote: `We care about your time, that's why we created a 3-stage onboarding that will not take more than 5 minutes to complete`,
      authorName: 'William Mac',
      authorRole: 'co founder investor',
    },
    {
      quote: `Save from thousands to millions on your deal. Secure the best possible. And get independent, unbiased advice for free`,
      authorName: 'Jodie Sears',
      authorRole: "unitedproperties' agent",
    },
    {
      quote: `United Properties is about fast & easy searching, buying, selling and investing ever — online, with an expert by our side`,
      authorName: 'Ollie Macmahon',
      authorRole: 'managing director',
    },
  ];

  const [state, setState] = useState({
    step: 1,
    quote: quotes[0].quote,
    authorName: quotes[0].authorName,
    authorRole: quotes[0].authorRole,
  });

  const currentStep = state.step;
  const currentQuote = state.quote;
  const currentAuthorName = state.authorName;
  const currentAuthorRole = state.authorRole;

  const incrementStep = () => {
    const newStep = state.step + 1;
    setState({
      step: newStep,
      quote: quotes[newStep - 1].quote,
      authorName: quotes[newStep - 1].authorName,
      authorRole: quotes[newStep - 1].authorRole,
    });
  };
  const decrementStep = () => {
    const newStep = state.step - 1;
    setState({
      step: newStep,
      quote: quotes[newStep - 1].quote,
      authorName: quotes[newStep - 1].authorName,
      authorRole: quotes[newStep - 1].authorRole,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submitted!');
  };

  return (
    <div className="App">
      <LeftBlock
        step={currentStep}
        quote={currentQuote}
        authorName={currentAuthorName}
        authorRole={currentAuthorRole}
      />
      <form onSubmit={submitHandler} className="page-content">
        {currentStep === 1 && (
          <ContactDetails
            currentStep={currentStep}
            nextStep={incrementStep}
            previousStep={decrementStep}
            onSubmit={submitHandler}
          />
        )}
        {currentStep === 2 && (
          <InvestmentPlans
            currentStep={currentStep}
            nextStep={incrementStep}
            previousStep={decrementStep}
          />
        )}
        {currentStep === 3 && (
          <InvestmentPreferences
            currentStep={currentStep}
            nextStep={incrementStep}
            previousStep={decrementStep}
          />
        )}
      </form>
    </div>
  );
}

export default App;
