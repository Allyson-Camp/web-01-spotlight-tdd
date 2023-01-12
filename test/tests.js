// IMPORT MODULES under test here:
import { addExclamationPoints, myFunction, multiplyBySeven, multiplyBy12ThenHalve, divideThenMultiply} from '../functions.js';

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

test('Tfunction should take in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {
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

//pick up on array
