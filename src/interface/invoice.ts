export interface IInvoice {
  attachments: string[];
  date: string;
  dueDays: number;
  id: string;
  pages: IInvoicePage[];
  sent?: string;
  vatPercentage: number;
}

export type IInvoicePage = ICharge[];

export interface ICharge {
  description: string;
  quantity: number;
  rate: number;
  vatPercentage?: number;
}
