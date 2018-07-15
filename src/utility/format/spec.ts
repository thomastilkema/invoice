jest.mock('@app/config', () => ({
  default: {
    general: {
      currencyCode: 'EUR',
      locale: 'nl-NL'
    }
  }
}));

import { numberToLocaleStringMock } from '@root/mock';
import { formatMoney, formatNumber, formatPercentage } from './';

describe('the utility function "formatNumber"', () => {
  beforeEach(() => {
    numberToLocaleStringMock.mockReturnValue('mocked_formatted_number_value');
  });

  it('should display the provided number according to the locale defined in the config', () => {
    const formatedNumber = formatNumber(123.456);

    expect(numberToLocaleStringMock).toHaveBeenCalledWith('nl-NL');
    expect(formatedNumber).toBe('mocked_formatted_number_value');
  });
});

describe('the utility function "formatPercentage"', () => {
  beforeEach(() => {
    numberToLocaleStringMock.mockReturnValue('mocked_formatted_percentage_value');
  });

  it('should display the provided value with a maximum of two decimals', () => {
    const formattedPercentage = formatPercentage(123.456);

    expect(numberToLocaleStringMock).toHaveBeenCalledWith('nl-NL', { maximumFractionDigits: 2 });
    expect(formattedPercentage).toBe('mocked_formatted_percentage_value %');
  });
});

describe('the utility function "formatMoney"', () => {
  beforeEach(() => {
    numberToLocaleStringMock.mockReturnValue('mocked_formatted_money_value');
  });

  it('should display the provided value with a maximum of two decimals', () => {
    const formattedPercentage = formatMoney(123.456);

    expect(numberToLocaleStringMock).toHaveBeenCalledWith('nl-NL', { style: 'currency', currency: 'EUR' });
    expect(formattedPercentage).toBe('mocked_formatted_money_value');
  });
});
