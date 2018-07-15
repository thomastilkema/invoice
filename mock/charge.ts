import { ICharge } from '@app/interface';

const defaultMock: ICharge = {
  description: 'mocked_charge_description',
  quantity: 12,
  rate: 34,
  vatPercentage: null
};

export function getChargeMock(properties: Partial<ICharge> = defaultMock): ICharge {
  return {
    ...defaultMock,
    ...properties
  };
}
