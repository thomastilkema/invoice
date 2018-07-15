import { IInvoice } from '@app/interface';

const data: IInvoice = {
  id: '006',
  date: '2016-06-29', // will default to today
  dueDays: 30,
  sent: null, // will default to 'date'
  vatPercentage: 21, // the VAT percentage to default to if a charge (see below) has no VAT percentage defined
  pages: [
    [
      {
        description: 'Omschrijving 1.1',
        quantity: 40,
        rate: 100,
        vatPercentage: null
      },
      {
        description: 'Omschrijving 1.2',
        quantity: 4,
        rate: 120,
        vatPercentage: 6
      }
    ],

    [
      {
        description: 'Omschrijving 2.1',
        quantity: 5,
        rate: 100,
        vatPercentage: 19
      }
    ]
  ],

  attachments: [
    'Reiskosten.pdf',
    'Urenveranwtwoording.pdf'
  ]
};

export default data;
