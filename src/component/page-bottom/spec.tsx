import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import PageBottom from './';

jest.mock('moment', () => (providedDate: string) => ({
  format: () => `formatted_date_${providedDate || 'today'}`
}));

function getComponent(invoiceDate = '2015-06-29', invoiceSentDate = '2015-06-30') {
  return (
    <PageBottom
      invoiceDate={invoiceDate}
      invoiceSentDate={invoiceSentDate}
      numberOfPages={5}
      pageNumber={4}
      receiverEmail="mocked_receiver_email"
      senderWebsite="mocked_sender_website"
    />
  );
}

describe('the page-bottom component', () => {
  let instance: ShallowWrapper;
  let instanceText: string;

  beforeEach(() => {
    instance = shallow(getComponent());
    instanceText = instance.text();
  });

  it('should display on which date the invoice was sent to the receiver email address', () => {
    expect(instanceText).toContain('formatted_date_2015-06-30');
    expect(instanceText).toContain('mocked_receiver_email');
  });

  describe('when the invoice sent date is not specified', () => {
    it('should mention the invoice was sent on the provided invoice date', () => {
      const adjustedInstanceText = shallow(getComponent('2015-06-29', null)).text();
      expect(adjustedInstanceText).toContain('formatted_date_2015-06-29');
    });
  });

  describe('when the invoice date and the invoice sent date are both not specified', () => {
    it('should mention the invoice was sent today', () => {
      const adjustedInstanceText = shallow(getComponent(null, null)).text();
      expect(adjustedInstanceText).toContain('formatted_date_today');
    });
  });

  it('should mention that the terms defined on the sender website apply to the invoice', () => {
    expect(instance.find('a[href="http://mocked_sender_website/voorwaarden/"]').exists()).toBe(true);
  });

  it('should display the current page number and the total number of pages', () => {
    expect(instanceText).toContain('Pagina 4 van 5');
  });

});
