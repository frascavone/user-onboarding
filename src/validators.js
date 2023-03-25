import {
  PhoneNumberUtil,
  PhoneNumberFormat as PNF,
} from 'google-libphonenumber';
const phoneUtil = PhoneNumberUtil.getInstance();

export const validateName = (string) => {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]\d/;
  if (string.trim().includes(' ') && !specialChars.test(string)) {
    // console.log('nome valido');
    return true;
  } else return false;
};
export const validatePhone = (string) => {
  try {
    const tel = phoneUtil.parse(string);
    if (phoneUtil.isValidNumber(tel)) {
      console.log('telefono valido');
      return true;
    } else throw Error;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};
export const validateEmail = (string) => {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (string.match(validRegex)) {
    return true;
  } else return false;
};
export const validateCountry = (string) => {
  if (string !== '') {
    console.log('country valida');
    return true;
  } else return false;
};
export const validateFrom = (string) => {
  if (string) {
    // console.log('valore from valido');
    return true;
  } else return false;
};
export const validateTo = (string) => {
  if (string) {
    // console.log('valore to valido');
    return true;
  } else return false;
};
