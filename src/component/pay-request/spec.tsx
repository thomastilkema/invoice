jest.mock('@app/config', () => ({}));
jest.mock('@app/utility');

import { shallow } from 'enzyme';
import * as React from 'react';

import * as utility from '@app/utility';
import { getInvoiceMock, getSenderMock } from '@root/mock';

jest.mock('moment', () => (providedDate: string) => ({
  add: (addDays: number) => ({
    format: () => `formatted_due_date: ${providedDate} + ${addDays}`
  })
}));

import PayRequest from './';

const mockedInvoice = getInvoiceMock();
const mockedSender = getSenderMock();

function getComponent() {
  return (
    <PayRequest
      invoice={mockedInvoice}
      sender={mockedSender}
    />
  );
}

describe('the pay-request component', () => {
  const getTotalSpy = jest.spyOn(utility, 'getTotal');
  const formatMoneySpy = jest.spyOn(utility, 'formatMoney');
  getTotalSpy.mockReturnValue(123.45);
  formatMoneySpy.mockReturnValue('€ 123.45');

  const instance = shallow(getComponent());
  const instanceText = instance.text();

  it('should mention the total amount to pay', () => {
    expect(getTotalSpy).toHaveBeenCalledWith(mockedInvoice.pages);
    expect(instanceText).toContain('€ 123.45');
  });

  it('should mention when the amount needs to be paid', () => {
    expect(instanceText).toContain('formatted_due_date: 2015-06-29 + 30');
  });

  it('should mention the bank account of the sender to transfer the money to', () => {
    expect(instanceText).toContain('mocked_sender_iban');
  });

  it('should mention the name of the owner of the bank account which should be used when transferring the money', () => {
    expect(instanceText).toContain('mocked_sender_companyName');
  });

  it('should mention the id of the inoive to use when transferring the money', () => {
    expect(instanceText).toContain('mocked_invoice_id');
  });

  it('should mention the phone number of the sender which can be called if the receiver has questions about the invoice', () => {
    expect(instanceText).toContain('mocked_sender_phone');
  });

  it('should mention the email address of the sender which can be used if the receiver has questions about the invoice', () => {
    expect(instance.find('a[href="mailto:mocked_sender_email"]').exists()).toBe(true);
  });

});
