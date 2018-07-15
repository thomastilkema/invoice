import { sortBy, uniq } from 'lodash';
import * as moment from 'moment';

import { ICharge, IInvoicePage } from '@app/interface';
import { getCharges, getPagesSubtotal, getVatPercentage, roundNumber } from '@app/utility';

export const getVatSubtotals = (pages: IInvoicePage[]) => {
  const charges = getCharges(pages);
  const subtotal = getPagesSubtotal(pages);
  return getVatPercentages(charges).map((vatPercentage) => ({
    vatPercentage,
    subtotal: roundNumber((subtotal / 100) * vatPercentage)
  }));
};

export const getTotal = (pages: IInvoicePage[]) => {
  const subtotal = getPagesSubtotal(pages);
  return getVatSubtotals(pages).reduce((total, vatSubtotal) => {
    return total + vatSubtotal.subtotal;
  }, subtotal);
};

const getVatPercentages = (charges: ICharge[]) => {
  const collection = charges.map((charge) => getVatPercentage(charge.vatPercentage));
  return sortBy(uniq(collection)).reverse();
};
