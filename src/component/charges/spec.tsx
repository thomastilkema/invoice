import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import { getChargeMock } from '@root/mock';

jest.mock('@app/utility', () => ({
  formatMoney: (value: number) => value,
  getChargesTotal: () => 123.45
}));

const mockedPages = [
  [
    getChargeMock({ description: 'Charge 1.1' }),
    getChargeMock({ description: 'Charge 1.2' }),
    getChargeMock({ description: 'Charge 1.3' })
  ],
  [
    getChargeMock({ description: 'Charge 2.1' }),
    getChargeMock({ description: 'Charge 2.2' })
  ],
  [
    getChargeMock({ description: 'Charge 3.1' })

  ]
];

import Charges from './';
import Charge from './charge';
import InvoiceTotal from './invoice-total';
import PreviousPagesTotal from './previous-pages-total';
import VatSubtotals from './vat-subtotals';

function getComponent(pageNumber = 1, displayInvoiceTotals = true) {
  return (
    <Charges
      displayInvoiceTotals={displayInvoiceTotals}
      pageNumber={pageNumber}
      pages={mockedPages}
    />
  );
}

describe('the charges component', () => {
  let instance: ShallowWrapper;

  beforeEach(() => {
    instance = shallow(getComponent());
  });

  it('should display table headings to make clear what each value in the overview means', () => {
    const tableHeadingRow = instance.find('thead tr').at(0);

    expect(tableHeadingRow.find('th').at(0).text()).toBe('Aantal');
    expect(tableHeadingRow.find('th').at(1).text()).toBe('Omschrijving');
    expect(tableHeadingRow.find('th').at(2).text()).toBe('Bedrag');
    expect(tableHeadingRow.find('th').at(3).text()).toBe('Totaal');
    expect(tableHeadingRow.find('th').at(4).text()).toBe('BTW');
  });

  it('should display the charges of the corresponding page number', () => {
    const charges = instance.find(Charge);
    expect(charges).toHaveLength(3);

    const mockedChargesOfPage1 = mockedPages[0];
    expect(charges.get(0).props.charge).toEqual(mockedChargesOfPage1[0]);
    expect(charges.get(1).props.charge).toEqual(mockedChargesOfPage1[1]);
    expect(charges.get(2).props.charge).toEqual(mockedChargesOfPage1[2]);
  });

  it('should display the subtotal of the charges displayed', () => {
    const subtotalRowText = instance.find('tfoot tr').at(0).text();

    expect(subtotalRowText).toContain('Subtotaal');
    expect(subtotalRowText).toContain(123.45);
  });

  describe('when the invoice totals should be displayed', () => {
    it('should display the VAT subtotals', () => {
      expect(instance.find(VatSubtotals).get(0).props.pages).toEqual(mockedPages);
    });

    it('should display the total amount of the invoice', () => {
      expect(instance.find(InvoiceTotal).get(0).props.pages).toEqual(mockedPages);
    });
  });

  describe('when the invoice totals should not be displayed', () => {
    beforeEach(() => {
      instance = shallow(getComponent(2, false));
    });

    it('should not display the VAT subtotals', () => {
      expect(instance.find(VatSubtotals).exists()).toBe(false);
    });

    it('should not display the total amount of the invoice', () => {
      expect(instance.find(InvoiceTotal).exists()).toBe(false);
    });
  });

  describe('the charges being displayed on the first page of the invoice', () => {
    it('should not display the subtotal of the previous pagaes', () => {
      expect(instance.find(PreviousPagesTotal).exists()).toBe(false);
    });
  });

  describe('when the the charges are being displayed on a second or later page of the invoice', () => {
    beforeEach(() => {
      instance = shallow(getComponent(3));
    });

    it('should display the subtotal of the previous pagaes', () => {
      expect(instance.find(PreviousPagesTotal).get(0).props).toEqual({
        pages: mockedPages,
        previousPageNumber: 2
      });
    });
  });

});
