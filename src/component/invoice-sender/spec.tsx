import { shallow } from 'enzyme';
import * as React from 'react';

import { getSenderMock } from '@root/mock';
import InvoiceSender from './';

function getComponent() {
  return (
    <InvoiceSender
      sender={getSenderMock()}
    />
  );
}

describe('the invoice-sender component', () => {
  const instance = shallow(getComponent());
  const instanceText = instance.text();

  it('should display the company name of the sender', () => {
    expect(instanceText).toContain('mocked_sender_companyName');
  });

  it('should display the contact name of the sender', () => {
    expect(instanceText).toContain('mocked_sender_contactName');
  });

  it('should display the address of the sender', () => {
    expect(instanceText).toContain('mocked_sender_address');
  });

  it('should display the zip code of the sender', () => {
    expect(instanceText).toContain('mocked_sender_zipCode');
  });

  it('should display the city of the sender', () => {
    expect(instanceText).toContain('mocked_sender_city');
  });

  it('should display the chamber of commerce id of the sender', () => {
    expect(instanceText).toContain('mocked_sender_cocNo');
  });

  it('should display the VAT number of the sender', () => {
    expect(instanceText).toContain('mocked_sender_vatNo');
  });

  it('should display the IBAN id of the sender', () => {
    expect(instanceText).toContain('mocked_sender_iban');
  });

  it('should display the BIC id of the sender\'s bank', () => {
    expect(instanceText).toContain('mocked_sender_bic');
  });

  it('should display the email address of the sender', () => {
    expect(instance.find('a[href="mailto:mocked_sender_email"]').exists()).toBe(true);
  });

  it('should display a link to the website of the sender', () => {
    expect(instance.find('a[href="http://mocked_sender_site"]').exists()).toBe(true);
  });

  it('should display the phone number of the sender', () => {
    expect(instanceText).toContain('mocked_sender_phone');
  });

});
