import { shallow } from 'enzyme';
import * as React from 'react';

import PageContinued from './';

function getComponent() {
  return (
    <PageContinued
      previousPageNumber={4}
    />
  );
}

describe('the page-continued component', () => {
  const instance = shallow(getComponent());
  const instanceText = instance.text();

  it('should mention that this overview is a continuation from the previous page', () => {
    expect(instance.find('a[href="#page-4"]').exists()).toBe(true);
  });

});
