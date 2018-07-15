import { roundNumber } from './';

describe('the function which rounds numbers', () => {

  it('should round a number to two decimals', () => {
    expect(roundNumber(1.987)).toBe(1.99);
  });

});
