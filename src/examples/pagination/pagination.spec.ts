import { isLastPage } from '.';

describe('Method: isLastPage', () => {
  test('Returns undefined if current page is 0', () => {
    expect(isLastPage({ currentPage: 0, items: [] })).toBe(undefined);
  });
  test('Returns 1 if current page is 1 and has no items', () => {
    expect(isLastPage({ currentPage: 1, items: [] })).toBe(1);
  });
  test('Returns 0 if current page is 1 and has 1 item', () => {
    expect(isLastPage({ currentPage: 1, items: [1] })).toBe(0);
  });
  test('Returns page?', () => {
    expect(isLastPage({ currentPage: 1, items: [0,0,0,0,0] })).toBe(1);
  });
});
