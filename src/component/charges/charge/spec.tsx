jest.mock('@app/utility');

import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import * as utility from '@app/utility';
import { getChargeMock } from '@root/mock';

import Charge from './';

const mockedCharge = getChargeMock({
  description: 'mocked_charge_description',
  quantity: 12,
  rate: 34
});

function getComponent() {
  return (
    <Charge
      charge={mockedCharge}
    />
  );
}

describe('the charge component', () => {
  let instance: ShallowWrapper;
  let instanceText: string;

  let formatMoneySpy: jest.SpyInstance;
  let formatNumberSpy: jest.SpyInstance;
  let formatPercentageSpy: jest.SpyInstance;
  let getChargeTotalSpy: jest.SpyInstance;
  let getVatPercentageSpy: jest.SpyInstance;

  beforeEach(() => {
    formatMoneySpy = jest.spyOn(utility, 'formatMoney');
    formatNumberSpy = jest.spyOn(utility, 'formatNumber');
    formatPercentageSpy = jest.spyOn(utility, 'formatPercentage');
    getChargeTotalSpy = jest.spyOn(utility, 'getChargeTotal');
    getVatPercentageSpy = jest.spyOn(utility, 'getVatPercentage');

    const returnProvidedValue = (value: number) => value;
    formatMoneySpy.mockImplementation(returnProvidedValue);
    formatNumberSpy.mockImplementation(returnProvidedValue);
    formatPercentageSpy.mockImplementation((value) => `${value} %`);

    getChargeTotalSpy.mockReturnValue(56);
    getVatPercentageSpy.mockReturnValue(21);
  });

  beforeEach(() => {
    instance = shallow(getComponent());
    instanceText = instance.text();
  });

  it('should display the quantity of the provided charge', () => {
    expect(instanceText).toContain(12);
  });

  it('should display the description of the provided charge', () => {
    expect(instanceText).toContain('mocked_charge_description');
  });

  it('should display the rate of the provided charge', () => {
    expect(instanceText).toContain(34);
  });

  it('should display the total value of the provided charge', () => {
    expect(getChargeTotalSpy).toHaveBeenCalledWith(12, 34);
    expect(instanceText).toContain(56);
  });

  it('should display the provided or default VAT percentage of the provided charge', () => {
    expect(getVatPercentageSpy).toHaveBeenCalledWith(null);
    expect(instanceText).toContain('21 %');
  });

});
