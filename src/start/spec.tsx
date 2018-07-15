jest.mock('react-dom');

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from '@app/component/app';
import config from '@app/config';
import { startApp } from './index';

describe('starting the application', () => {
  jest.spyOn(ReactDOM, 'render');

  it('should initialize the app component', () => {
    expect(ReactDOM.render).not.toHaveBeenCalled();

    startApp();

    expect(ReactDOM.render).toHaveBeenCalledWith(
      <App
        invoice={config.invoice}
        receiver={config.receiver}
        sender={config.sender}
      />,
      document.getElementById('js-app')
    );
  });
});
