import { ISender } from '@app/interface';

export function getSenderMock(): ISender {
  return {
    companyName: 'mocked_sender_companyName',
    contactName: 'mocked_sender_contactName',
    address: 'mocked_sender_address',
    zipCode: 'mocked_sender_zipCode',
    city: 'mocked_sender_city',

    phone: 'mocked_sender_phone',
    email: 'mocked_sender_email',
    site: 'mocked_sender_site',
    payOff: 'mocked_sender_payOff',

    cocNo: 'mocked_sender_cocNo',
    vatNo: 'mocked_sender_vatNo',
    iban: 'mocked_sender_iban',
    bic: 'mocked_sender_bic'
  };
}
