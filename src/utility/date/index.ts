import * as moment from 'moment';

export const getDueDate = (invoiceDate: string, dueDays: number) => getInvoiceDate(invoiceDate).add(dueDays, 'days');
export const getInvoiceDate = (invoiceDate: any) => moment(invoiceDate || undefined);
