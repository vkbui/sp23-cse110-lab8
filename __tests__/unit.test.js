// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber
test('matches valid phone numbers', () => {
    expect(functions.isPhoneNumber('(123)456-7890')).toBe(true);
    expect(functions.isPhoneNumber('(323)423-5488')).toBe(true);
    expect(functions.isPhoneNumber('abc')).toBe(false);
    expect(functions.isPhoneNumber('456-78')).toBe(false);
})

// isEmail
test('matches valid emails', () => {
    expect(functions.isEmail('bruh@gmail.com')).toBe(true);
    expect(functions.isEmail('hello123@cse.edu')).toBe(true);
    expect(functions.isEmail('hello')).toBe(false);
    expect(functions.isEmail('123')).toBe(false);
})

// isStrongPassword
test('The passwords first character must be a letter, it must contain at least * 4 characters and no more than 15 characters and no characters other than * * letters, numbers and the underscore may be used', () => {
    expect(functions.isStrongPassword('buebruf321')).toBe(true);
    expect(functions.isStrongPassword('vuofgnkweb_')).toBe(true);
    expect(functions.isStrongPassword('123')).toBe(false);
    expect(functions.isStrongPassword('hi')).toBe(false);
})

// isDate
test('This regular expressions matches dates of the form XX / XX / YYYY where XX can be 1 or 2 digits long and YYYY is always 4 digits long.', () => {
    expect(functions.isDate('01/01/2000')).toBe(true);
    expect(functions.isDate('1/1/2323')).toBe(true);
    expect(functions.isDate('01/01/20000')).toBe(false);
    expect(functions.isDate('2123')).toBe(false);
})

// isHexColor
test('Matches valid 3 or 6 character hex codes used for HTML or CSS.', () => {
    expect(functions.isHexColor('#42b6f5')).toBe(true);
    expect(functions.isHexColor('#123')).toBe(true);
    expect(functions.isHexColor('12345678')).toBe(false);
    expect(functions.isHexColor('###')).toBe(false);



})