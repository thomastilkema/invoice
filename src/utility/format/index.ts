import config from '@app/config';

export const formatNumber = (value: number) => Number(value).toLocaleString(config.general.locale);

export const formatPercentage = (value: number) => {
  const format = Number(value).toLocaleString(config.general.locale, { maximumFractionDigits: 2 });
  return `${format} %`;
};

export const formatMoney = (value: number) =>
  Number(value).toLocaleString(config.general.locale, { style: 'currency', currency: config.general.currencyCode });
