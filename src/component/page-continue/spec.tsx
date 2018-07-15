import { shallow } from 'enzyme';
import * as React from 'react';

import PageContinue from './';

function getComponent(nextPageNumber = 4) {
  return (
    <PageContinue
      nextPageNumber={nextPageNumber}
      numberOfPages={5}
    />
  );
}

describe('the page-continue component', () => {
  const instance = shallow(getComponent());
  const instanceText = instance.text();

  it('should mention that the overview will continue on the next page', () => {
    expect(instance.find('a[href="#page-4"]').exists()).toBe(true);
  });

  it('should display the total number of pages', () => {
    expect(instanceText).toContain('pagina 4 (van 5)');
  });

  describe('when the next page is the final page', () => {
    it('should display that the next page is the final page', () => {
      const adjustedInstanceText = shallow(getComponent(5)).text();
      expect(adjustedInstanceText).toContain('pagina 5 (laatste pagina)');
    });
  });

});
