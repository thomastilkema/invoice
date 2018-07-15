import { shallow } from 'enzyme';
import * as React from 'react';

import InvoiceData from '../invoice-data';
import InvoiceReceiver from '../invoice-receiver';
import InvoiceSender from '../invoice-sender';
import PageTop from './';

import { getInvoiceMock, getReceiverMock, getSenderMock } from '@root/mock';

const mockedInvoice = getInvoiceMock();
const mockedReceiver = getReceiverMock();
const mockedSender = getSenderMock();

function getComponent(isCompact = false) {
  return (
    <PageTop
      isCompact={isCompact}
      invoice={mockedInvoice}
      receiver={mockedReceiver}
      sender={mockedSender}
    />
  );
}

describe('the page-top component', () => {
  let instance = shallow(getComponent());

  it('should display the invoice title', () => {
    expect(instance.text()).toContain('Factuur');
  });

  it('should display the sender company logo', () => {
    expect(instance.find('img.invoice-from__logo').exists()).toBe(true);
  });

  it('should display a link to the website of the sender', () => {
    expect(instance.find('a[href="http://mocked_sender_site"]').exists()).toBe(true);
  });

  it('should display the pay-off of the sender', () => {
    expect(instance.text()).toContain('mocked_sender_payOff');
  });

  describe('when in extended mode', () => {
    it('should display the invoice date, due date and invoice id', () => {
      const invoiceData = instance.find(InvoiceData).get(0);

      expect(invoiceData.props).toEqual({
        date: mockedInvoice.date,
        dueDays: mockedInvoice.dueDays,
        id: mockedInvoice.id
      });
    });

    it('should display the company name, contact name and contact information of the party where the invoice is sent to', () => {
      const invoiceReceiver = instance.find(InvoiceReceiver).get(0);

      expect(invoiceReceiver.props).toEqual({
        receiver: mockedReceiver
      });
    });

    it('should display the company name, contact name and contact information of the party which sends the invoice', () => {
      const invoiceSender = instance.find(InvoiceSender).get(0);

      expect(invoiceSender.props).toEqual({
        sender: mockedSender
      });
    });
  });

  describe('when in compact mode', () => {
    beforeEach(() => {
      instance = shallow(getComponent(true));
    });

    it('should not display the invoice date, due date and invoice id', () => {
      expect(instance.find(InvoiceData).exists()).toBe(false);
    });

    it('should not display the company name, contact name and contact information of the party where the invoice is sent to', () => {
      expect(instance.find(InvoiceReceiver).exists()).toBe(false);
    });

    it('should not display the company name, contact name and contact information of the party which sends the invoice', () => {
      expect(instance.find(InvoiceSender).exists()).toBe(false);
    });
  });

});
