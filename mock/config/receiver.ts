import { IReceiver } from '@app/interface';

export function getReceiverMock(): IReceiver {
  return {
    companyName: 'mocked_receiver_companyName',
    address: 'mocked_receiver_address',
    zipCode: 'mocked_receiver_zipCode',
    city: 'mocked_receiver_city',

    contactName: 'mocked_receiver_contactName',
    contactEmail: 'mocked_receiver_contactEmail'
  };
}
