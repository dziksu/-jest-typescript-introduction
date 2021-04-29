// Mock functions are also known as "spies", because they let you spy on the behavior
// of a function that is called indirectly by some other code, rather than
// only testing the output. You can create a mock function with jest.fn().
// If no implementation is given, the mock function will return undefined when invoked.

// Let's go deep into mock object
// We can create mock function by using jest.fn()

import * as lodash from 'lodash';
import * as examples from "./examples";
import {audio, video} from "./examples";

// we can call it 'stub';
const mockFn = jest.fn();

// The mockFn function contains:
mockFn.mock.calls
mockFn.mock.instances
mockFn.mock.results
mockFn.mock.invocationCallOrder

// Jest can use all of them to track what happen with the function,
// how many times was called and with what results.
// That's why we can call the "spies" to spy function.

test('Mock return simple value', () => {
  //Simple example how to handle returns value:
  const mockReturnValue = jest.fn();
  mockReturnValue.mockReturnValue(42);
  mockReturnValue(); // 42
  expect(mockReturnValue()).toBe(42);
  mockReturnValue.mockReturnValue(43);
  mockReturnValue(); // 43
  expect(mockReturnValue()).toBe(42);
  // Below we can find a good example about how we can implement the mock
});

test('Mock return depends on invocation count', () => {
  const myMockFn = jest
    .fn(() => 'default') // or .mockReturnValue('default')
    .mockImplementationOnce(() => 'first call')
    .mockImplementationOnce(() => 'second call');

  // 'first call', 'second call', 'default', 'default'
  console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());

  // What about promises? No problem:
  jest.fn().mockImplementation(() => Promise.resolve(111));
});

// Event with async await
test('async test', async () => {
  const asyncMock = jest.fn().mockResolvedValue(43);
  expect(await asyncMock()).toBe(43); // 43
});

test('async test #2', async () => {
  expect.assertions(2);

  const asyncMock2 = jest
    .fn()
    .mockResolvedValueOnce('first call')
    .mockRejectedValueOnce(new Error('Async error'));

  await expect(asyncMock2()).resolves.toMatch('first call'); // first call
  await expect(asyncMock2()).rejects.toBeTruthy(); // throws "Async error"
});

test('doAsync calls both callbacks', () => {
  const stub1 = jest.fn();
  const stub2 = jest.fn();

  examples.doAsync(stub1, stub2);

  expect(stub1).toHaveBeenCalled();
  expect(stub1).toHaveBeenCalledTimes(1);
  expect(stub1).toHaveBeenCalledWith('hello');

  expect(stub2).toHaveBeenCalled();
  expect(stub2).toHaveBeenCalledTimes(1);
  expect(stub2).toHaveBeenCalledWith('there');
});


// jest.spyOn;
function b(){
  console.log('asd');
  return lodash.isEmpty({});
}

test('doAsync2 spy invoked function', () => {
  // jest.spyOn(lodash, 'isEmpty').mockImplementation(() => customImplementation)
  // it's the same like:
  // lodash['isEmpty'] = jest.fn(() => customImplementation);

  const spy = jest.spyOn(lodash, 'isEmpty');
  expect(spy).toHaveBeenCalled();
  // lodash['isEmpty'] = jest.fn().mockReturnValue(false);

  expect(b()).toBe(false);

  jest.clearAllMocks();
});


// jest.spyOn get/set;

describe('Jest SpyOn - Get / Set', () => {
  test('Get method "play"', () => {
    const spy = jest.spyOn(video, 'play', 'get'); // we pass 'get'
    const isPlaying = video.play;

    expect(spy).toHaveBeenCalled();
    expect(isPlaying).toBe(true);

    spy.mockRestore();
  });

  test('Set property "volume"', () => {
    const spy = jest.spyOn(audio, 'volume', 'set'); // we pass 'set'
    audio.volume = 100;

    expect(spy).toHaveBeenCalled();
    expect(audio.volume).toBe(100);

    spy.mockRestore();
  });
})


