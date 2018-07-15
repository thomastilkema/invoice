jest.mock('@app/utility');

import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import * as utility from '@app/utility';
import { getChargeMock } from '@root/mock';

import InvoiceTotal from './';

const mockedPages = [
  [
    getChargeMock()
  ]
];

function getComponent() {
  return (
    <InvoiceTotal
      pages={mockedPages}
    />
  );
}

describe('the invoice-total component', () => {
  let instanceText: string;

  let formatMoneySpy: jest.SpyInstance;
  let getTotalSpy: jest.SpyInstance;

  beforeEach(() => {
    formatMoneySpy = jest.spyOn(utility, 'formatMoney');
    getTotalSpy = jest.spyOn(utility, 'getTotal');

    formatMoneySpy.mockImplementation((value) => value);
    getTotalSpy.mockReturnValue(123.45);
  });

  beforeEach(() => {
    instanceText = shallow(getComponent()).text();
  });

  it('should display that the value displayed is the total invoice amount', () => {
    expect(instanceText).toContain('Totaal');
  });

  it('should display the description of the provided charge', () => {
    expect(getTotalSpy).toHaveBeenCalledWith(mockedPages);
    expect(instanceText).toContain('123.45');
  });

});
