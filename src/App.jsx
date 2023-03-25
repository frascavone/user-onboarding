import './App.scss';
import { LeftBlock } from './components/layout/LeftBlock';
import { ContactDetails } from './components/pages/ContactDetails';
import { InvestmentPlans } from './components/pages/InvestmentPlans';
import { InvestmentPreferences } from './components/pages/InvestmentPreferences';
import { useReducer, useState } from 'react';

const initialState = {
  fullName: '',
  phone: '',
  email: '',
  country: '',
  currency: 'EUR',
  from: '',
  to: '',
  isInvestor: false,
  estateOptions: {
    singleFamily: false,
    residentialMultifamily: false,
    commercialRetail: false,
    commercialIndustrial: false,
    commercialHospitality: false,
    commercialWarehousing: false,
    commercialOffice: false,
    other: false,
  },
};
const errors = {
  fullName: '',
  phone: '',
  email: '',
  country: '',
  from: '',
  to: '',
};

const quotes = [
  {
    text: `We care about your time, that's why we created a 3-stage onboarding that will not take more than 5 minutes to complete`,
    authorName: 'William Mac',
    authorRole: 'co founder investor',
  },
  {
    text: `Save from thousands to millions on your deal. Secure the best possible. And get independent, unbiased advice for free`,
    authorName: 'Jodie Sears',
    authorRole: "unitedproperties' agent",
  },
  {
    text: `United Properties is about fast & easy searching, buying, selling and investing ever — online, with an expert by our side`,
    authorName: 'Ollie Macmahon',
    authorRole: 'managing director',
  },
];

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

function reducer(state, action) {
  switch (action.type) {
    case 'SET_FULLNAME':
      return { ...state, fullName: action.payload };
    case 'SET_PHONE':
      return { ...state, phone: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_COUNTRY':
      return { ...state, country: action.payload };
    case 'SET_RANGE':
      const formattedValue = (+action.payload).toLocaleString(
        navigator.language,
        {
          style: 'currency',
          currency: 'EUR',
          maximumSignificantDigits: 1,
        }
      );
      const FROM = +state.from.replace(/\D/g, '');
      if (state.from === '' || +action.payload < FROM)
        return { ...state, from: formattedValue };
      else {
        return { ...state, to: formattedValue };
      }
    case 'SET_FROM':
      return { ...state, from: action.payload };
    case 'SET_TO':
      return { ...state, to: action.payload };
    case 'SET_ISINVESTOR':
      return { ...state, isInvestor: Boolean(action.payload) };
    case 'SET_ESTATEOPTIONS':
      return {
        ...state,
        estateOptions: {
          ...state.estateOptions,
          [action.payload]: !state.estateOptions[action.payload],
        },
      };
    default:
      return state;
  }
}

function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});
  const [quote, setQuote] = useState(quotes[0]);

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNext = (newData) => {
    if (
      Object.values(errors).some((error) => error !== '') &&
      Object.values(errors.range).some((value) => value !== '')
    ) {
      console.log('Form contains errors:', errors);
    } else {
      setData((prevData) => ({ ...prevData, ...newData }));
      setStep((prevStep) => prevStep + 1);
      setQuote((prevQuote) => {
        return quotes[quotes.indexOf(prevQuote) + 1];
      });
    }
  };

  const handleBack = () => {
    if (
      Object.values(errors).some((error) => error !== '') &&
      Object.values(errors.range).some((value) => value !== '')
    ) {
      console.log('Form contains errors:', errors);
    } else {
      setStep((prevStep) => prevStep - 1);
      setQuote((prevQuote) => {
        return quotes[quotes.indexOf(prevQuote) - 1];
      });
    }
  };

  const handleSubmit = (newData) => {
    setData((prevData) => ({ ...prevData, ...newData }));
    console.log('Form data step 3:', data);
  };

  return (
    <div className="App">
      <LeftBlock step={step} quote={quote} />
      <form onSubmit={handleSubmit} className="page-content">
        {step === 1 && (
          <ContactDetails
            step={step}
            data={data}
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
            data={data}
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
            data={data}
            state={state}
            dispatch={dispatch}
            onBack={handleBack}
            onSubmit={handleSubmit}
          />
        )}
      </form>
    </div>
  );
}
export default App;
