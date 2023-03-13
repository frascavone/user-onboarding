import './App.scss';
import { LeftBlock } from './components/layout/LeftBlock';
import { ContactDetails } from './components/pages/ContactDetails';
import { InvestmentPlans } from './components/pages/InvestmentPlans';
import { useState } from 'react';
import { InvestmentPreferences } from './components/pages/InvestmentPreferences';

function App() {
  let [currentStep, setCurrentStep] = useState(2);

  const [quote, setQuote] = useState(
    `We care about your time, that's why we created a 3-stage onboarding that will not take more than 5 minutes to complete`
  );
  let [authorName, setAuthorName] = useState('William Mac');
  let [authorRole, setAuthorRole] = useState('co founder investor');

  // if (currentStep === 2) {
  //   setQuote(() => 'quote2');
  //   setAuthorName(() => 'author2');
  //   setAuthorRole(() => 'role2');
  // }
  // if (currentStep === 3) {
  //   setQuote(() => 'quote3');
  //   setAuthorName(() => 'author3');
  //   setAuthorRole(() => 'role3');
  // }

  const clickHandler = () => {
    setCurrentStep((currentStep) => currentStep++);
    console.log('Ho cliccato!!!');
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
          step={currentStep}
          title="Contact Details"
          description="Welcome to United Properties, we are glad to see you! Let’s get started by letting us know a little bit about you"
          onClick={clickHandler}
        />
      )}
      {currentStep === 2 && (
        <InvestmentPlans
          step={currentStep}
          title="Investment plans"
          description="Let us know about your investment plans. This will help us get you to the right expert who will help you further"
        />
      )}
      {currentStep === 3 && (
        <InvestmentPreferences
          step={currentStep}
          title="Investment preferences"
        />
      )}
    </div>
  );
}

export default App;
