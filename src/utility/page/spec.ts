import { getChargeMock } from '@root/mock';

import { getPagesSubtotal, getPreviousPagesSubtotal } from './';

const mockedPages = [
  [
    getChargeMock({ quantity: 10, rate: 10 })
  ],
  [
    getChargeMock({ quantity: 20, rate: 10 })
  ],
  [
    getChargeMock({ quantity: 30, rate: 10 })
  ]
];

describe('the utility function "getPreviousPagesSubtotal', () => {
  it('should return the subtotal value of the provided invoice pages previous to the provided page index', () => {
    const previousPagesSubtotal = getPreviousPagesSubtotal(mockedPages, 2);
    expect(previousPagesSubtotal).toBe(300);
  });
});

describe('the utility function "getPagesSubtotal', () => {
  it('should return the subtotal value of all provided invoice pages', () => {
    const pagesSubtotal = getPagesSubtotal(mockedPages);
    expect(pagesSubtotal).toBe(600);
  });
});
