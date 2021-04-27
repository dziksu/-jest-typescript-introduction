import { onSameDay, convertToDoubles } from '.';

describe('Method: onSameDay', () => {
  test('Two the same dates gives true', () => {
    const date = new Date();
    expect(onSameDay(date, date)).toBeTruthy();
  });

  test('Two diffrent dates gives false', () => {
    const date1 = new Date('2021-04-18');
    const date2 = new Date('2021-04-19');
    expect(onSameDay(date1, date2)).toBeFalsy();
  });

  test('Pass only undefined/null', () => {
    expect(onSameDay(undefined, undefined)).toBeFalsy();
    expect(onSameDay(null, null)).toBeFalsy();
  });
});

describe('Method: convertToDoubles', () => {
  test('Convert 9 to 09', () => {
    expect(convertToDoubles(9)).toBe('09');
  });

  test('left 12 as 12', () => {
    expect(convertToDoubles(12)).toBe(1);
  });

  test('pass undefined', () => {
    expect(convertToDoubles(undefined)).toMatch('00');
  });
});
