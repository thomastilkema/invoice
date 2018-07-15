jest.mock('@app/utility');

import { shallow } from 'enzyme';
import * as React from 'react';

import * as utility from '@app/utility';
import { getChargeMock } from '@root/mock';

import PreviousPagesTotal from './';

const mockedPages = [
  [
    getChargeMock()
  ]
];

function getComponent(previousPageNumber = 1) {
  return (
    <PreviousPagesTotal
      pages={mockedPages}
      previousPageNumber={previousPageNumber}
    />
  );
}

describe('the previous-pages-total component', () => {
  let instanceText: string;

  let formatMoneySpy: jest.SpyInstance;
  let getPreviousPagesSubtotalSpy: jest.SpyInstance;

  beforeEach(() => {
    formatMoneySpy = jest.spyOn(utility, 'formatMoney');
    getPreviousPagesSubtotalSpy = jest.spyOn(utility, 'getPreviousPagesSubtotal');

    formatMoneySpy.mockImplementation((value) => value);
    getPreviousPagesSubtotalSpy.mockReturnValue(123.45);
  });

  beforeEach(() => {
    instanceText = shallow(getComponent()).text();
  });

  it('should display the total invoice amount', () => {
    expect(instanceText).toContain('123.45');
  });

  describe('when the previous page number is 1', () => {
    it('should mention that the total value displayed is the total value of page 1', () => {
      expect(instanceText).toContain('Subtotaal van pagina 1');
      expect(instanceText).not.toContain('t/m');
    });
  });

  describe('when the previous page number is 2 or higher', () => {
    beforeEach(() => {
      instanceText = shallow(getComponent(4)).text();
    });

    it('should mention that the total value displayed is the total value of page 1 until the previous page', () => {
      expect(instanceText).toContain('Subtotaal van pagina 1 t/m 4');
    });
  });

});
