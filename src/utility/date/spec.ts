import * as moment from 'moment';

import { getDueDate, getInvoiceDate } from './';

describe('the utility function "getInvoiceDate', () => {
  it('should return a moment date object of the provided invoice date', () => {
    const expectedMoment = moment('2015-06-09');
    expect(getInvoiceDate('2015-06-09').format()).toBe(expectedMoment.format());
  });

  it('should return a moment date object of today if the provided invoice date is not defined', () => {
    const expectedMoment = moment();
    expect(getInvoiceDate(null).format()).toBe(expectedMoment.format());
  });
});

describe('the utility function "getDueDate', () => {
  it('should return a moment date object of the invoice date plus the number of due days', () => {
    const expectedMoment = getInvoiceDate('2015-06-09').add(2, 'days');
    expect(getDueDate('2015-06-09', 2).format()).toBe(expectedMoment.format());
  });
});
