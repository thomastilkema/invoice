import { shallow } from 'enzyme';
import * as React from 'react';

import { getConfigMock } from '@root/mock';

import Page from '@app/component/page';
import App from './';

const mockedConfig = getConfigMock();

function getComponent() {
  return (
    <App
      invoice={mockedConfig.invoice}
      receiver={mockedConfig.receiver}
      sender={mockedConfig.sender}
    />
  );
}

describe('the app component', () => {
  const instance = shallow(getComponent());

  it('should render the correct number of invoice pages based on the provided invoice data', () => {
    expect(instance.find(Page)).toHaveLength(3);
  });

  it('should provide each page with the proper info', () => {
    const page1 = instance.find(Page).get(0);
    expect(page1.props).toEqual({
      invoice: mockedConfig.invoice,
      pageNumber: 1,
      receiver: mockedConfig.receiver,
      sender: mockedConfig.sender
    });

    const page2 = instance.find(Page).get(1);
    expect(page2.props.pageNumber).toEqual(2);
  });

  it('should set the browser title to the invoice id', () => {
    expect(document.title).toBe('mocked_invoice_id');
  });

});
