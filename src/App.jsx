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

  let [state, setState] = useState({
    step: 1,
    quote: quotes[0].quote,
    authorName: quotes[0].authorName,
    authorRole: quotes[0].authorRole,
  });

  const currentStep = state.step;
  const quote = state.quote;
  const authorName = state.authorName;
  const authorRole = state.authorRole;

  const incrementStep = () => {
    const newStep = state.step + 1;
    console.log(state.step);
    setState({
      step: newStep,
      quote: quotes[newStep - 1].quote,
      authorName: quotes[newStep - 1].authorName,
      authorRole: quotes[newStep - 1].authorRole,
    });
  };
  const decrementStep = () => {
    const newStep = state.step - 1;
    console.log(state.step);
    setState({
      step: newStep,
      quote: quotes[newStep - 1].quote,
      authorName: quotes[newStep - 1].authorName,
      authorRole: quotes[newStep - 1].authorRole,
    });
  };

  return (
    <div className="App">
      <LeftBlock
        step={currentStep}
        quote={quote}
        authorName={authorName}
        authorRole={authorRole}
      />
      {currentStep === 1 && (
        <ContactDetails
          currentStep={currentStep}
          title="Contact Details"
          description="Welcome to United Properties, we are glad to see you! Let’s get started by letting us know a little bit about you"
          nextStep={incrementStep}
          previousStep={decrementStep}
        />
      )}
      {currentStep === 2 && (
        <InvestmentPlans
          title="Investment plans"
          description="Let us know about your investment plans. This will help us get you to the right expert who will help you further"
          currentStep={currentStep}
          nextStep={incrementStep}
          previousStep={decrementStep}
        />
      )}
      {currentStep === 3 && (
        <InvestmentPreferences
          title="Investment preferences"
          description="This will help us figure out what your investment options are so that we can show you only possibly intresting for you deals"
          currentStep={currentStep}
          nextStep={incrementStep}
          previousStep={decrementStep}
        />
      )}
    </div>
  );
}

export default App;
