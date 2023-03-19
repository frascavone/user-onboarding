import * as helpers from './validators.js';

export const stateReducer = (prevState, action) => {
  if (action.type === 'USER_INPUT') {
    switch (action.input) {
      case 'phonePrefix': {
        return {
          ...prevState,
          phone: { ...prevState[phone], prefix: action.value },
        };
      }
      case 'isInvestor': {
        return {
          ...prevState,
          [action.input]: action.value ? true : false,
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
        return {
          ...prevState,
          [action.input]: { ...prevState[action.input], val: action.value },
        };
      }
    }
  }
  if (action.type === 'VALIDATION') {
    switch (action.input) {
      case 'fullName': {
        return {
          ...prevState,
          [action.input]: {
            ...prevState[action.input],
            isValid: helpers.validateName(action.value),
          },
        };
      }
      case 'phone': {
        return {
          ...prevState,
          [action.input]: {
            ...prevState[action.input],
            isValid: helpers.validatePhone(action.value),
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
        return {
          ...prevState,
          [action.input]: {
            ...prevState[action.input],
            isValid: helpers.validateCountry(action.value),
          },
        };
      }
      case 'from': {
        return {
          ...prevState,
          [action.input]: {
            ...prevState[action.input],
            isValid: helpers.validateFrom(action.value),
          },
        };
      }
      case 'to': {
        return {
          ...prevState,
          [action.input]: {
            ...prevState[action.input],
            isValid: helpers.validateTo(action.value),
          },
        };
      }
      default: {
        return {
          ...prevState,
          [inputName]: { ...prevState[inputName], isValid: false },
        };
      }
    }
  }
};
