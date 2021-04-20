import { sliceName } from '.';

describe('Method: sliceName', () => {
  test('Slice name "John Doe" into "J. Doe"', () => {
    expect(sliceName('John Doe')).toMatch('J. Doe');
  });
  test('Slice name "John" into "John"', () => {
    const result = sliceName('John');
    expect(result).not.toMatch(/undefined/);
    expect(result).toMatch(/J/);
  });
  test('Slice name "" into ""', () => {
    expect(sliceName('')).not.toMatch(/undefined/);
    expect(sliceName('')).toMatch('');
  });
});
