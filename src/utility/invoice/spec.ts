jest.mock('@app/config', () => ({
  default: {
    invoice: {
      vatPercentage: 10
    }
  }
}));

import { getChargeMock } from '@root/mock';

import { getTotal, getVatSubtotals } from './';

const mockedPages = [
  [
    getChargeMock({ quantity: 10, rate: 10, vatPercentage: null }), // vatPercentage will default to 10 defined in config (see above)
    getChargeMock({ quantity: 10, rate: 10, vatPercentage: 20 })
  ],
  [
    getChargeMock({ quantity: 20, rate: 10, vatPercentage: 5 })
  ]
];

describe('the utility function "getVatSubtotals', () => {
  it('should return a sorted list of VAT percentages defined in the provided invoice pages with their corresponding subtotal value', () => {
    const vatSubtotals = getVatSubtotals(mockedPages);

    expect(vatSubtotals).toHaveLength(3);
    expect(vatSubtotals[0]).toEqual({ vatPercentage: 20, subtotal: 80 });
    expect(vatSubtotals[1]).toEqual({ vatPercentage: 10, subtotal: 40 });
    expect(vatSubtotals[2]).toEqual({ vatPercentage: 5, subtotal: 20 });
  });

  it('should round each subtotal value to two decimals', () => {
    const pages = [
      [
        getChargeMock({ quantity: 20, rate: 5, vatPercentage: 6.789 })
      ]
    ];
    const vatSubtotals = getVatSubtotals(pages);

    expect(vatSubtotals[0].subtotal).toBe(6.79);
  });
});

describe('the utility function "getTotal', () => {
  it('should return the total value of all invoice charges', () => {
    expect(getTotal(mockedPages)).toBe(540);
  });
});
