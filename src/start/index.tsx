import * as React from 'react';
import { render } from 'react-dom';

import App from '@app/component/app';
import config from '@app/config';

export function startApp() {
  render(
    <App
      invoice={config.invoice}
      receiver={config.receiver}
      sender={config.sender}
    />,
    document.getElementById('js-app')
  );
}
