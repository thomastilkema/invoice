import { shallow } from 'enzyme';
import * as React from 'react';

import { getReceiverMock } from '@root/mock';
import InvoiceReceiver from './';

function getComponent() {
  return (
    <InvoiceReceiver
      receiver={getReceiverMock()}
    />
  );
}

describe('the invoice-receiver component', () => {
  const instanceText = shallow(getComponent()).text();

  it('should display the company name of the receiver', () => {
    expect(instanceText).toContain('mocked_receiver_companyName');
  });

  it('should display the address of the receiver', () => {
    expect(instanceText).toContain('mocked_receiver_address');
  });

  it('should display the zip code of the receiver', () => {
    expect(instanceText).toContain('mocked_receiver_zipCode');
  });

  it('should display the city of the receiver', () => {
    expect(instanceText).toContain('mocked_receiver_city');
  });

  it('should display the contact name of the receiver', () => {
    expect(instanceText).toContain('T.a.v. mocked_receiver_contactName');
  });

  it('should display the email address of the contact person of the receiver', () => {
    expect(instanceText).toContain('mocked_receiver_contactEmail');
  });

});
