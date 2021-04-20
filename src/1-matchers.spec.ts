import { shoppingList, functionThrowingError } from './examples';

// "matchers" let you test values in different ways.
// The simplest way to match is by using "expect"

// The matcher can be use to handle types like
// primitive types
// Arrays and iterables
// Exceptions
// Promises
// Regex
// and more... (https://jestjs.io/docs/expect)


//Primitives expect

// Examples:
// "toBe" check value
// "toEqual" almost the same like to be but can check deeply to objects equals
// "toMatch" check regex
// "toThrow" check if throws any error
// "toContain" check if contain in array
// "toBeNull" matches only null
// "toBeUndefined" matches only undefined
// "toBeDefined" is the opposite of toBeUndefined
// "toBeTruthy" matches anything that an if statement treats as true
// "toBeFalsy" matches anything that an if statement treats as false

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('there is no I in John', () => {
  expect('john').not.toMatch(/i/);
});

test('but there is a "friend" in Girlfriend', () => {
  expect('Girlfriend').toMatch(/friend/);
});

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
  expect(new Set(shoppingList)).toContain('beer');
});

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  // toBe has to be replace toEqual to check deeply object
  expect(data).toEqual({one: 1, two: 2});
});

test('throw error', () => {
  expect(() => functionThrowingError()).toThrow();
  expect(() => functionThrowingError()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => functionThrowingError()).toThrow('Hello, I\'m error');
  expect(() => functionThrowingError()).toThrow(/Hello/);
});


