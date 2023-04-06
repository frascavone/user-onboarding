import {
  PhoneNumberUtil,
  PhoneNumberFormat as PNF,
} from 'google-libphonenumber';
import { errors } from './data';

export function reducer(state, action) {
  switch (action.type) {
    case 'SET_FULLNAME':
      return { ...state, fullName: action.payload };
    case 'SET_PHONE':
      return { ...state, phone: action.payload };
    case 'FORMAT_PHONE':
      {
        try {
          const phoneUtil = PhoneNumberUtil.getInstance();
          const number = phoneUtil.parseAndKeepRawInput(
            action.payload,
            navigator.language.slice(3)
          );
          return {
            ...state,
            phone: phoneUtil.format(number, PNF.INTERNATIONAL),
          };
        } catch (error) {
          errors.phone = `${error.message}`;
        }
      }
      break;
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

export default { reducer };
