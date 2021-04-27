function rollK20() {
  return Math.floor(Math.random() * (20) + 1);
}

describe('Gra RPG', () => {
  describe('Idziesz polną drogą, i rzuca się na ciebie zająć (taki z monty pythona)', () => {
    test('Rzuc k20 aby zrobic unik', () => {
      expect(rollK20()).toBeGreaterThanOrEqual(5);
    });
    describe('Za zającem wyskakuje wilk', () => {
      test('Rzuc k20 aby zrobic unik', () => {
        expect(rollK20()).toBeGreaterThanOrEqual(10);
      });

      test('Rzuc 2 razy k20 aby wykonac atak', () => {
        expect(rollK20()).toBeLessThanOrEqual(18);
        expect(rollK20()).toBeLessThanOrEqual(15);
      });
    })
  })
})
