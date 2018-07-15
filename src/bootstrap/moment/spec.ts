jest.mock('moment');
jest.mock('@app/config/general', () => ({
  default: {
    locale: 'mocked_locale'
  }
}));

import * as moment from 'moment';

import { setMomentLocale } from './';

describe('setting the locale on the moment library', () => {
  let momentLocaleSpy: jest.SpyInstance;

  beforeEach(() => {
    momentLocaleSpy = jest.spyOn(moment, 'locale');
  });

  it('should use the locale defined in the configuration', () => {
    expect(momentLocaleSpy).not.toHaveBeenCalled();

    setMomentLocale();
    expect(momentLocaleSpy).toHaveBeenCalledWith('mocked_locale');
  });
});
