jest.mock('@app/utility');

import { shallow } from 'enzyme';
import * as React from 'react';

import * as utility from '@app/utility';
import InvoiceData from './';

function getComponent() {
  return (
    <InvoiceData
      id="mocked_invoice_id"
      date="2015-06-29"
      dueDays={1}
    />
  );
}

describe('the invoice-data component', () => {
  let instanceText: string;
  let getInvoiceDateSpy: jest.SpyInstance;
  let getDueDateSpy: jest.SpyInstance;

  beforeEach(() => {
    getInvoiceDateSpy = jest.spyOn(utility, 'getInvoiceDate');
    getDueDateSpy = jest.spyOn(utility, 'getDueDate');

    instanceText = shallow(getComponent()).text();
  });

  it('should display the invoice date', () => {
    expect(getInvoiceDateSpy).toHaveBeenCalledWith('2015-06-29');
    expect(instanceText).toContain('29-06-2015');
  });

  it('should display the due date', () => {
    expect(getDueDateSpy).toHaveBeenCalledWith('2015-06-29', 1);
    expect(instanceText).toContain('30-06-2015');
  });

  it('should display the invoice id', () => {
    expect(instanceText).toContain('mocked_invoice_id');
  });

});
