import * as helpers from './validators.js';
import {
  PhoneNumberUtil,
  PhoneNumberFormat as PNF,
} from 'google-libphonenumber';
const phoneUtil = PhoneNumberUtil.getInstance();

export const stateReducer = (prevState, action) => {
  if (action.type === 'USER_INPUT') {
    switch (action.input) {
      case 'country': {
        if (action.value !== '') {
          return {
            ...prevState,
            country: {
              currency: 'EUR',
              val: action.value,
              isValid: true,
            },
          };
        } else
          return {
            ...prevState,
            country: {
              currency: '',
              val: action.value,
              isValid: false,
            },
          };
      }
      case 'from': {
        return {
          ...prevState,
          range: {
            ...prevState.range,
            from: {
              ...prevState.range.from,
              val: action.value,
            },
          },
        };
      }
      case 'to': {
        return {
          ...prevState,
          range: {
            ...prevState.range,
            to: { ...prevState.range.to, val: action.value },
          },
        };
      }
      case 'range': {
        const formattedValue = (+action.value).toLocaleString(
          navigator.language,
          {
            style: 'currency',
            currency: 'EUR',
            maximumSignificantDigits: 1,
          }
        );
        // checks if "from" field is empty or minor than "to" field
        const fromContainsNumbers = /\d/.test(prevState.range.from.val);
        const FROM = +prevState.range.from.val.replace(/\D/g, '');

        if (!fromContainsNumbers)
          return {
            ...prevState,
            range: {
              ...prevState.range,
              from: { ...prevState.range.from, val: formattedValue },
            },
          };
        else if (+action.value < FROM) {
          return {
            ...prevState,
            range: {
              ...prevState.range,
              from: { ...prevState.range.from, val: formattedValue },
            },
          };
        } else {
          return {
            ...prevState,
            range: {
              ...prevState.range,
              to: { ...prevState.range.to, val: formattedValue },
            },
          };
        }
      }
      case 'isInvestor': {
        return {
          ...prevState,
          isInvestor: Boolean(action.value),
        };
      }
      case 'realEstates': {
        const toggledOption = prevState.realEstates.find(
          (el) => el.type === action.value
        );
        toggledOption.val = !toggledOption.val;
        return { ...prevState };
      }
      default: {
        if (prevState[action.input])
          return {
            ...prevState,
            [action.input]: { ...prevState[action.input], val: action.value },
          };
        else throw Error(`Unknown action input: "${action.input}"`);
      }
    }
  }
  if (action.type === 'VALIDATION') {
    switch (action.input) {
      case 'fullName':
        return {
          ...prevState,
          [action.input]: {
            ...prevState[action.input],
            isValid: helpers.validateName(action.value),
          },
        };
      case 'phone': {
        if (helpers.validatePhone(action.value)) {
          const tel = phoneUtil.parse(action.value);
          const formattedPhone = phoneUtil.format(tel, PNF.INTERNATIONAL);
          return {
            ...prevState,
            phone: {
              val: formattedPhone,
              isValid: true,
            },
          };
        } else
          return {
            ...prevState,
            phone: {
              val: action.value,
              isValid: false,
            },
          };
      }
      case 'email': {
        return {
          ...prevState,
          [action.input]: {
            ...prevState[action.input],
            isValid: helpers.validateEmail(action.value),
          },
        };
      }
      case 'country': {
        if (action.value !== '') {
          return {
            ...prevState,
            country: {
              val: action.value,
              isValid: true,
            },
          };
        } else
          return {
            ...prevState,
            country: {
              val: action.value,
              isValid: false,
            },
          };
      }

      case 'from': {
        return {
          ...prevState,
          range: {
            ...prevState.range,
            from: {
              ...prevState.range.from,
              isValid: helpers.validateFrom(action.value),
            },
          },
        };
      }
      case 'to': {
        // estract numbers from values
        const actionValue = +action.value.replace(/\D/g, '');
        const FROM = +prevState.range.from.val.replace(/\D/g, '');
        if (actionValue < FROM) {
          return {
            ...prevState,
            range: {
              ...prevState.range,
              to: {
                ...prevState.range.to,
                isValid: false,
              },
            },
          };
        } else
          return {
            ...prevState,
            range: {
              ...prevState.range,
              to: {
                ...prevState.range.to,
                isValid: helpers.validateTo(action.value),
              },
            },
          };
      }
      default: {
        return {
          ...prevState,
          [action.input]: { ...prevState[action.input], isValid: false },
        };
      }
    }
  }
};
