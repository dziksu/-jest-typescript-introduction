import {fetchData, fetchDataPromise} from './examples';
// Testing Asynchronous Code

// If we want to check result in async way wth call back we have to
// use param "done" to show up jest that we want to finish test with positive or
// negative result, if we don't use done in code then the test will fail.
test('The data is true', done => {
  function callback(data) {
    try {
      expect(data).toBe(true);
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(callback);
});

test('test promise with then way', () => {
  return fetchDataPromise().then(data => {
    expect(data).toBe(true);
  });
});

test('the fetch fails with an Error', () => {
  expect.assertions(1);
  return fetchDataPromise(true).catch(e => expect(e).toMatch('Error'));
});

// We can use also JEST functionality like ".resolves" and ".rejects"
test('.resolve', () => {
  return expect(fetchDataPromise()).resolves.toBe(true);
});

test('.reject', () => {
  // If we want to handle rejections we have to declare how many assertions we want to handle
  // without the declaration we won't catch any error.
  expect.assertions(1); // So this is important!
  return expect(fetchDataPromise(true)).rejects.toMatch('Error');
});

// The same but with Async / Await
test('async await resolve', async () => {
  const data = await fetchDataPromise();
  expect(data).toBe(true);
});

test('async await reject', async () => {
  expect.assertions(1);
  try {
    await fetchDataPromise(true);
  } catch (e) {
    expect(e).toMatch('Error');
  }
});

// Of course We can combine async and await with .resolves or .rejects.
test('combine resolve', async () => {
  await expect(fetchDataPromise()).resolves.toBe(true);
});

test('combine reject', async () => {
  await expect(fetchDataPromise(true)).rejects.toMatch('Error');
});


