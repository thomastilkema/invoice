jest.mock('@app/utility');

import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import * as utility from '@app/utility';
import { getChargeMock } from '@root/mock';

import VatSubtotals from './';

const mockedPages = [
  [
    getChargeMock()
  ]
];

function getComponent() {
  return (
    <VatSubtotals
      pages={mockedPages}
    />
  );
}

describe('the vat-subtotals component', () => {
  let instance: ShallowWrapper;

  let formatMoneySpy: jest.SpyInstance;
  let formatPercentageSpy: jest.SpyInstance;
  let getVatSubtotalsSpy: jest.SpyInstance;

  beforeEach(() => {
    formatMoneySpy = jest.spyOn(utility, 'formatMoney');
    formatPercentageSpy = jest.spyOn(utility, 'formatPercentage');
    getVatSubtotalsSpy = jest.spyOn(utility, 'getVatSubtotals');

    formatMoneySpy.mockImplementation((value: number) => value);
    formatPercentageSpy.mockImplementation((value) => `${value} %`);
    getVatSubtotalsSpy.mockReturnValue([
      {
        subtotal: 98.76,
        vatPercentage: 9
      },
      {
        subtotal: 54.32,
        vatPercentage: 8
      }
    ]);
  });

  beforeEach(() => {
    instance = shallow(getComponent());
  });

  it('it should display all VAT subtotals', () => {
    expect(getVatSubtotalsSpy).toHaveBeenCalledWith(mockedPages);
    expect(instance.find('tr').length).toBe(2);
  });

  describe('for each VAT subtotal', () => {
    it('should display the VAT percentage', () => {
      expect(instance.find('th').at(0).text()).toBe('9 % BTW');
      expect(instance.find('th').at(1).text()).toBe('8 % BTW');
    });

    it('should display the subtotal value', () => {
      expect(instance.find('td').at(0).text()).toBe('98.76');
      expect(instance.find('td').at(1).text()).toBe('54.32');
    });
  });

});
