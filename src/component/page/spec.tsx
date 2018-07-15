import { shallow } from 'enzyme';
import * as React from 'react';

import Attachments from '../attachments';
import Charges from '../charges';
import PageBottom from '../page-bottom';
import PageContinue from '../page-continue';
import PageContinued from '../page-continued';
import PageTop from '../page-top';
import PayRequest from '../pay-request';
import Page from './';

import { getInvoiceMock, getReceiverMock, getSenderMock } from '@root/mock';

const mockedInvoice = getInvoiceMock();
const mockedReceiver = getReceiverMock();
const mockedSender = getSenderMock();

function getComponent(pageNumber = 1) {
  return (
    <Page
      invoice={mockedInvoice}
      pageNumber={pageNumber}
      receiver={mockedReceiver}
      sender={mockedSender}
    />
  );
}

describe('the page component', () => {
  let instance = shallow(getComponent());

  it('should display the top part', () => {
    const pageTop = instance.find(PageTop).get(0);

    expect(pageTop.props).toEqual(
      jasmine.objectContaining({
        invoice: mockedInvoice,
        receiver: mockedReceiver,
        sender: mockedSender
      })
    );
  });

  it('should display the charges of this page', () => {
    const chargesComponent = instance.find(Charges).get(0);

    expect(chargesComponent.props).toEqual(
      jasmine.objectContaining({
        pageNumber: 1,
        pages: mockedInvoice.pages
      })
    );
  });

  it('should display the bottom part', () => {
    const pageBottom = instance.find(PageBottom).get(0);

    expect(pageBottom.props).toEqual({
      invoiceDate: mockedInvoice.date,
      invoiceSentDate: mockedInvoice.sent,
      numberOfPages: 3,
      pageNumber: 1,
      receiverEmail: mockedReceiver.contactEmail,
      senderWebsite: mockedSender.site
    });
  });

  describe('the first page', () => {
    it('should display the invoice data (invoice date, due date, sender address, receiver address)', () => {
      const pageTop = instance.find(PageTop).get(0);

      expect(pageTop.props.isCompact).toBe(false);
    });

    it('should not mention that this page is a continuation from the previous page', () => {
      expect(instance.find(PageContinued).exists()).toBe(false);
    });
  });

  describe('a page which is not the first page', () => {
    beforeEach(() => {
      instance = shallow(getComponent(2));
    });

    it('should only display the invoice title and company name and not all the other invoice data (sender, receiver, invoice date)', () => {
      expect(instance.find(PageTop).get(0).props.isCompact).toBe(true);
    });

    it('should mention that this page is a continuation from the previous page', () => {
      expect(instance.find(PageContinued).exists()).toBe(true);
    });
  });

  describe('a page which is not the final page', () => {
    it('should not display the VAT subtotals and invoice total', () => {
      const chargesComponent = instance.find(Charges).get(0);

      expect(chargesComponent.props.displayInvoiceTotals).toBe(false);
    });

    it('should mention that this overview will continue on the next page', () => {
      expect(instance.find(PageContinue).exists()).toBe(true);
    });

    it('should not list the attachments sent with this invoice', () => {
      expect(instance.find(Attachments).exists()).toBe(false);
    });

    it('should not mention the total amount, when that amount should be paid and contact info to use when having questions', () => {
      expect(instance.find(PayRequest).exists()).toBe(false);
    });
  });

  describe('the final page', () => {
    beforeEach(() => {
      instance = shallow(getComponent(3));
    });

    it('should display the VAT subtotals and invoice total', () => {
      const chargesComponent = instance.find(Charges).get(0);

      expect(chargesComponent.props.displayInvoiceTotals).toBe(true);
    });

    it('should not mention that this overview will continue on the next page', () => {
      expect(instance.find(PageContinue).exists()).toBe(false);
    });

    it('should list the attachments sent with this invoice', () => {
      const attachmentsComponent = instance.find(Attachments).get(0);

      expect(attachmentsComponent.props).toEqual({ attachments: mockedInvoice.attachments });
    });

    it('should mention the total amount, when that amount should be paid and contact info to use when having questions', () => {
      const payRequest = instance.find(PayRequest).get(0);

      expect(payRequest.props).toEqual({
        invoice: mockedInvoice,
        sender: mockedSender
      });
    });
  });

});
