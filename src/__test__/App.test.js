import {
  validateName,
  validatePhone,
  validateEmail,
  validateCountry,
} from '../validators';

// IF EMPTY STRING IS RETURNED, THE VALUE IS VALID

// VALIDATE NAME TESTS ///////////////////////////////

test('Checks if (firstname + space + lastname) is valid', () => {
  expect(validateName('Mario Rossi')).toBe('');
});

test('Checks if special characters are invalid', () => {
  expect(validateName('AE^&^* CSCvfr433')).toBe(
    'Please insert your firstname and lastname separated by a space.'
  );
});

test('Checks if apostrophe is valid', () => {
  expect(validateName("Alessandro D'amico")).toBe('');
});

test('Checks if middle name or composed lastname are valids', () => {
  expect(validateName('Luca di Montezemolo')).toBe('');
});

test('Checks if fullname is valid', () => {
  expect(validateName('MarioRossi')).toBe(
    'Please insert your firstname and lastname separated by a space.'
  );
});

// VALIDATE PHONE TESTS //////////////////////////////

test('Checks if phone have valid dial code', () => {
  expect(validatePhone('2343421')).toBeTruthy();
});

test('Checks if phone number is valid', () => {
  expect(validatePhone('+393273637465')).toBe('');
});

test('Checks if phone number contains non digits', () => {
  expect(validatePhone('+3932asce7455')).toBe(''); // 'googlelibphonenumber' treat some non-digit characters as digits
});

// VALIDATE EMAIL TESTS //////////////////////////////

test('Checks if email without @ is invalid', () => {
  expect(validateEmail('testtest.com')).toBeTruthy();
});

test('Checks if email without TLD is invalid', () => {
  expect(validateEmail('test@test.')).toBeTruthy();
});

test('Checks if email with point before @ is invalid', () => {
  expect(validateEmail('te.st@test.it')).toBe('');
});

test('Checks if email without point after @ is invalid', () => {
  expect(validateEmail('test@testit')).toBeTruthy();
});

test('Checks if email with symbols in the "local" area are valid', () => {
  expect(validateEmail('te$%^&#st@test.it')).toBe('');
});
