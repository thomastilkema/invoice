import { IInvoicePage } from '@app/interface';
import { getCharges, getChargesTotal } from '@app/utility';

export const getPreviousPagesSubtotal = (pages: IInvoicePage[], currentPageIndex: number) => {
  const slicedPages = getPagesUntilIndex(pages, currentPageIndex - 1);
  return getPagesSubtotal(slicedPages);
};

export const getPagesSubtotal = (pages: IInvoicePage[]) => {
  const charges = getCharges(pages);
  return getChargesTotal(charges);
};

const getPagesUntilIndex = (pages: IInvoicePage[], untilPageIndex: number) =>
  pages.slice(0, untilPageIndex + 1);
