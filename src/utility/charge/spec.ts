jest.mock('@app/config', () => ({
  default: {
    invoice: {
      vatPercentage: 21
    }
  }
}));

import { getChargeMock } from '@root/mock';

import { getCharges, getChargesTotal, getChargeTotal, getVatPercentage } from './';

describe('the utility function "getCharges', () => {
  it('should return an aggregated list of charges for the provided pages', () => {
    const pages = [
      [
        getChargeMock({ description: 'Charge 1.1' }),
        getChargeMock({ description: 'Charge 1.2' })
      ],
      [
        getChargeMock({ description: 'Charge 2.1' })
      ]
    ];

    const charges = getCharges(pages);

    expect(charges).toHaveLength(3);
    expect(charges[0].description).toBe('Charge 1.1');
    expect(charges[1].description).toBe('Charge 1.2');
    expect(charges[2].description).toBe('Charge 2.1');
  });
});

describe('the utility function "getChargeTotal', () => {
  it('should return the total value of a charge', () => {
    const chargeQuantity = 40;
    const chargeRate = 80;
    expect(getChargeTotal(chargeQuantity, chargeRate)).toBe(3200);
  });

  it('should round the total value of a charge to two decimals', () => {
    const chargeQuantity = 6.789;
    const chargeRate = 1;
    expect(getChargeTotal(chargeQuantity, chargeRate)).toBe(6.79);
  });
});

describe('the utility function "getChargesTotal', () => {
  it('should return the total value of the provided charges', () => {
    const charges = [
      getChargeMock({ quantity: 10, rate: 20 }),
      getChargeMock({ quantity: 30, rate: 40 })
    ];

    expect(getChargesTotal(charges)).toBe(1400);
  });
});

describe('the utility function "getVatPercentage', () => {
  it('should return the vat percentage if one is provided', () => {
    expect(getVatPercentage(12.5)).toBe(12.5);
  });

  it('should return the vat percentage defined in the config if no vat percentage is provided', () => {
    expect(getVatPercentage()).toBe(21);
  });
});
