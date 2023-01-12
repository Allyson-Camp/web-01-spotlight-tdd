// IMPORT MODULES under test here:
import { addExclamationPoints, myFunction, multiplyBySeven, multiplyBy12ThenHalve, divideThenMultiply, returnAsAString, returnAsAnArray, makeLuckyGreeting, getSecondItem } from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.deepEqual(actual, expected, 'true = true');
});

test('This test should add three exclamation points', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = addExclamationPoints('bunny rabbit');

    expect.deepEqual(actual, expected);
    
    const expected1 = 'hello world!!!';

    const actual1 = addExclamationPoints('hello world');

    expect.deepEqual(actual1, expected1);

    const expected2 = 'send help!!!';

    const actual2 = addExclamationPoints('send help');

    expect.deepEqual(actual2, expected2);
});

test('This function should take in a number and multiply it by seven', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.deepEqual(actual, expected);

    const expected1 = 42;

    const actual1 = multiplyBySeven(6);

    expect.deepEqual(actual1, expected1);

    const expected2 = 14;

    const actual2 = multiplyBySeven(2);

    expect.deepEqual(actual2, expected2);
});

test('This function should take in a number and multiply it by twelve then cut the result in half', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.deepEqual(actual, expected);

    const expected1 = 18;

    const actual1 = multiplyBy12ThenHalve(3);

    expect.deepEqual(actual1, expected1);
    const expected2 = 30;

    const actual2 = multiplyBy12ThenHalve(5);

    expect.deepEqual(actual2, expected2);
});

test('This function should take in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.deepEqual(actual, expected);

    const expected1 = 27;

    const actual1 = divideThenMultiply(12, 4, 9);

    expect.deepEqual(actual1, expected1);

    const expected2 = 18;

    const actual2 = divideThenMultiply(6, 1, 3);

    expect.deepEqual(actual2, expected2);
});

test('This function should take in three numbers and return those numbers in an array', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);

    expect.deepEqual(actual, expected);

    const expected1 = [3, 6, 9];

    const actual1 = returnAsAnArray(3, 6, 9);

    expect.deepEqual(actual1, expected1);

    const expected2 = [8, 1, 7];

    const actual2 = returnAsAnArray(8, 1, 7);

    expect.deepEqual(actual2, expected2);
});

test('This function should take in three numbers and return those numbers mushed together as a string', (expect) => {
    const expected = '845';

    const actual = returnAsAString(8, 4, 5);

    expect.deepEqual(actual, expected);

    const expected1 = '369';

    const actual1 = returnAsAString(3, 6, 9);

    expect.deepEqual(actual1, expected1);

    const expected2 = '817';

    const actual2 = returnAsAString(8, 1, 7);

    expect.deepEqual(actual2, expected2);
});

test('This function should take in two numbers and return a greeting announcing that the sum of those numbers is todays lucky number', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12.';

    const actual = makeLuckyGreeting(8, 4);

    expect.deepEqual(actual, expected);

    const expected1 = 'Hello! Your lucky number for the day is 14.';

    const actual1 = makeLuckyGreeting(6, 8);

    expect.deepEqual(actual1, expected1);

    const expected2 = 'Hello! Your lucky number for the day is 5.';

    const actual2 = makeLuckyGreeting(3, 2);

    expect.deepEqual(actual2, expected2);
});


