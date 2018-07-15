import { shallow } from 'enzyme';
import * as React from 'react';

import Attachments from './';

const mockedAttachments = [
  'attachment #1',
  'attachment #2',
  'attachment #3'
];

function getComponent(attachments = mockedAttachments) {
  return (
    <Attachments
      attachments={attachments}
    />
  );
}

describe('the attachments component', () => {
  const instance = shallow(getComponent());
  const text = instance.find('ul').text();

  it('should render all attachments in a list', () => {
    expect(instance.find('li')).toHaveLength(3);
  });

  it('should display the attachment name', () => {
    expect(text).toContain('attachment #1');
    expect(text).toContain('attachment #3');
  });

  it('should number the attachments if more than one attachment is provided', () => {
    expect(text).toContain('Bijlage 1: attachment #1');
    expect(text).toContain('Bijlage 3: attachment #3');

    const singleAttachment = mockedAttachments.slice(0, 1);
    expect(shallow(getComponent(singleAttachment)).text()).toContain('Bijlage: attachment #1');
  });

  it('should not render a list if no attachments are provided', () => {
    expect(shallow(getComponent([])).isEmptyRender()).toBe(true);
  });

});
