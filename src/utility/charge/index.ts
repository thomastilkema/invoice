import config from '@app/config';
import { ICharge, IInvoicePage } from '@app/interface';
import { roundNumber } from '@app/utility';

export const getCharges = (pages: IInvoicePage[]) =>
  pages.reduce((combinedCharges, currentCharges) => combinedCharges.concat(currentCharges), []);

export const getChargeTotal = (quantity: number, rate: number) => roundNumber(rate * quantity);

export const getChargesTotal = (charges: ICharge[]) => {
  const chargesTotal = charges.reduce((total, charge) => total + getChargeTotal(charge.quantity, charge.rate), 0);
  return roundNumber(chargesTotal);
};

export const getVatPercentage = (vatPercentage?: number) => vatPercentage || config.invoice.vatPercentage;
