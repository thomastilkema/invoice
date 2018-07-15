import { getGeneralConfigMock } from './general';
import { getInvoiceMock } from './invoice';
import { getReceiverMock } from './receiver';
import { getSenderMock } from './sender';

export { getGeneralConfigMock, getInvoiceMock, getReceiverMock, getSenderMock };

export function getConfigMock() {
  return {
    general: getGeneralConfigMock(),
    invoice: getInvoiceMock(),
    receiver: getReceiverMock(),
    sender: getSenderMock()
  };
}
