// Mock modules
// jest.mock(module, factory, options)
// jest.requireActual(moduleName)

import sims from './sims-module';

test('Be Sim', () => {
  expect(sims.rest()).toBe('8h');
  expect(sims.work()).toBe('8h');
  expect(sims.sleep()).toBe('6h');

  expect(sims.rest).toHaveBeenCalled();
  expect(sims.sleep).toHaveBeenCalled();
});


console.log('UTILS', sims);












// Create dynamic mock from module

const simsMock = jest.createMockFromModule('./sims-module')['default'];
const actualSimsModule = jest.requireActual('./sims-module')['default'];

simsMock.sleep = actualSimsModule.sleep;
simsMock.work = jest.fn(actualSimsModule.work);
simsMock.rest = jest.fn(() => '4h');

test('Be Sim #2', () => {
  expect(simsMock.sleep()).toBe('8h');
  expect(simsMock.work()).toBe('8h');
  expect(simsMock.rest()).toBe('4h');

  // expect(simsMock.sleep).toHaveBeenCalled();
  expect(simsMock.work).toHaveBeenCalled();
  expect(simsMock.rest).toHaveBeenCalled();
});
