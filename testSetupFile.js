jest.mock('./src/sims-module', () => {
  return ({
    default: {
      ...jest.requireActual('./src/sims-module').default,
      rest: jest.fn(jest.requireActual('./src/sims-module').default.rest),
      sleep: jest.fn(() => {
        console.log('-- MOCKED SLEEP ---');
        return '6h'
      })
    },
    foo: jest.fn(() => 43),
  })
});
