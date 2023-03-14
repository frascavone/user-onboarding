import './App.scss';
import { LeftBlock } from './components/layout/LeftBlock';
import { ContactDetails } from './components/pages/ContactDetails';
import { InvestmentPlans } from './components/pages/InvestmentPlans';
import { useState } from 'react';
import { InvestmentPreferences } from './components/pages/InvestmentPreferences';

function App() {
  let [state, setState] = useState({
    step: 1,
    quote: `We care about your time, that's why we created a 3-stage onboarding that will not take more than 5 minutes to complete`,
    authorName: 'William Mac',
    authorRole: 'co founder investor',
  });

  const currentStep = state.step;
  const quote = state.quote;
  const authorName = state.authorName;
  const authorRole = state.authorRole;

  const incrementStep = () => {
    setState({
      step: state.step + 1,
      authorName: 'author2',
      authorRole: 'role2',
    });
  };
  const decrementStep = () => {
    setState({
      step: state.step - 1,
      authorName: 'author2',
      authorRole: 'role2',
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
