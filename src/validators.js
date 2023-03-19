export const validateName = (string) => {
  if (string.includes(' ')) {
    console.log('nome valido');
    return true;
  } else return false;
};
export const validatePhone = (string) => {
  if (string.length === 10) {
    console.log('telefono valido');
    return true;
  } else return false;
};
export const validateEmail = (string) => {
  if (string.includes('@')) {
    console.log('email valida');
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
  if (string.startsWith('$') && string.length > 3) {
    console.log('valore from valido');
    return true;
  } else return false;
};
export const validateTo = (string) => {
  if (string.startsWith('$') && string.length > 3) {
    console.log('valore to valido');
    return true;
  } else return false;
};
export default { validateName, validatePhone, validateEmail };
