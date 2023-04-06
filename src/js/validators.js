import { PhoneNumberUtil } from 'google-libphonenumber';

export const validateName = (string) => {
  // const specialChars = /[`!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?~]\d/;
  const regEx = /^[a-zA-Z]+ [a-zA-Z- ']+$/;
  if (regEx.test(string) && string.trim().includes(' ')) {
    return '';
  } else
    return 'Please insert your firstname and lastname separated by a space.';
};

// export const validatePhone = (string) => {
//   if (/^\+[0-9]{12}$/.test(string)) return '';
//   else return 'Invalid number';
// };

export const validatePhone = (string) => {
  try {
    const phoneUtil = PhoneNumberUtil.getInstance();
    const tel = phoneUtil.parseAndKeepRawInput(string, 'IT');
    if (phoneUtil.isValidNumber(tel) && phoneUtil.isPossibleNumber(tel)) {
      return '';
    } else throw Error('Invalid number');
  } catch (error) {
    return `${error.message}`;
  }
};
export const validateEmail = (string) => {
  const validRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2}))$/;
  if (string.match(validRegex)) {
    return '';
  } else return 'Please insert a valid email';
};
export const validateCountry = (string) => {
  if (string !== '') return '';
  else return 'Please insert a value';
};

export default {
  validateCountry,
  validateEmail,
  validateName,
  validatePhone,
};
