jest.mock('./moment');

import * as locale from './moment';

describe('bootstrapping the application', () => {
  beforeEach(() => {
    jest.spyOn(locale, 'setMomentLocale');
  });

  it('should set the locale on the moment library', () => {
    expect(locale.setMomentLocale).not.toHaveBeenCalled();

    require('./');
    expect(locale.setMomentLocale).toHaveBeenCalledWith();
  });
});
