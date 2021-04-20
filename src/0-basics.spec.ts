// --- Jest itself is written in TypeScript. ---

// Basic mechanisms to handle tests

// Many time we can fine words like "test" or "it" in jest "it" is just a alias for test
// Each test has to have "name" which is identifier and should be unique.
// Let's show up some examples:

test('Check if true is true', () => {
  console.log('TEST 1');
  return expect(true).toBe(true);
});

// this is the same like

it('Check if false is false', () => {
  console.log('TEST 2');
  return expect(false).toBe(false);
});

// To handle group of tests we can use "describe" function

describe("Let's check all booleans possibilities", () => {
  test('Check if false is not true', () => {
    console.log('TEST 3');
    return expect(true).not.toBe(false);
  });
  it('Check if false is not false', () => {
    console.log('TEST 4');
    return expect(false).not.toBe(true);
  });
});

// If we have to set up some configuration before we start any of tests
// or we have to mock function, module, object for all tests in the same way
// we can use "beforeAll" function. It will run once before all tests in the file.

beforeAll(() => {
  console.log('beforeAll');
});

// Sometimes we have to set up stm before each test separately in this
// case we can use "beforeEach" method

beforeEach(() => {
  console.log('beforeEach');
})

// But what about clean up something after dirty work?
// In this case we can use "afterAll"

afterAll(() => {
  console.log('Clear nasa database');
});

afterEach(() => {
  console.log('afterEach');
});


