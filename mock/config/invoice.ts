import { IInvoice } from '@app/interface';
import { getChargeMock } from '../charge';

export function getInvoiceMock(): IInvoice {
  return {
    id: 'mocked_invoice_id',
    date: '2015-06-29',
    dueDays: 30,
    sent: null,
    vatPercentage: 21,

    pages: [
      [
        getChargeMock({
          description: 'Charge 1.1'
        }),
        getChargeMock({
          description: 'Charge 1.2'
        })
      ],

      [
        getChargeMock({
          description: 'Charge 2.1'
        }),
        getChargeMock({
          description: 'Charge 2.2'
        }),
        getChargeMock({
          description: 'Charge 2.3'
        })
      ],

      [
        getChargeMock({
          description: 'Charge 3.1'
        }),
        getChargeMock({
          description: 'Charge 3.2'
        })
      ]
    ],

    // The attachments which will be sent with this invoice
    attachments: [
      'Attachment #1',
      'Attachment #2',
      'Attachment #3'
    ]
  };
}
