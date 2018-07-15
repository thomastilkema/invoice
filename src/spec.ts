jest.mock('@app/start');

import * as startAppUtility from '@app/start';

describe(`the project's entry file`, () => {
  let isBootstrapped = false;
  let startAppUtilitySpy: jest.SpyInstance;

  beforeAll(() => {
    startAppUtilitySpy = jest.spyOn(startAppUtility, 'startApp');
    startAppUtilitySpy.mockImplementation(undefined);

    jest.mock('@app/bootstrap', () => {
      isBootstrapped = true;
    });

    require('./index');
  });

  it('should execute the bootstrap functions', () => {
    expect(isBootstrapped).toBe(true);
  });

  it('should start the app', () => {
    expect(startAppUtilitySpy).toHaveBeenCalledWith();
  });
});
