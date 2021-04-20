// Mock functions are also known as "spies", because they let you spy on the behavior
// of a function that is called indirectly by some other code, rather than
// only testing the output. You can create a mock function with jest.fn().
// If no implementation is given, the mock function will return undefined when invoked.

// Let's go deep into mock object
// We can create mock function by using jest.fn()

const mockFn = jest.fn();

// The mockFn function contains:
mockFn.mock.calls
mockFn.mock.instances
mockFn.mock.results
mockFn.mock.invocationCallOrder

// Jest can use all of them to track what happen with the function,
// how many times was called and with what results.
// That's why we can call the "spies" to spy function.

//Simple example how to handle returns value:
const mockReturnValue = jest.fn();
mockReturnValue.mockReturnValue(42);
mockReturnValue(); // 42
mockReturnValue.mockReturnValue(43);
mockReturnValue(); // 43

// Below we can find a good example about how we can implement the mock
const myMockFn = jest
  .fn(() => 'default') // or .mockReturnValue('default')
  .mockImplementationOnce(() => 'first call')
  .mockImplementationOnce(() => 'second call');

// 'first call', 'second call', 'default', 'default'
console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());

// What about promises? No problem:
jest.fn().mockImplementation(() => Promise.resolve(111));

// Event with async await
test('async test', async () => {
  const asyncMock = jest.fn().mockResolvedValue(43);
  await asyncMock(); // 43
});

test('async test #2', async () => {
  expect.assertions(2);

  const asyncMock = jest
    .fn()
    .mockResolvedValueOnce('first call')
    .mockRejectedValueOnce(new Error('Async error'));

  await expect(asyncMock()).resolves.toMatch('first call'); // first call
  await expect(asyncMock()).rejects.toBeTruthy(); // throws "Async error"
});
