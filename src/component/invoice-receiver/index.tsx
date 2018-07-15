import * as React from 'react';

import { IReceiver } from '@app/interface';

interface IProps {
  receiver: IReceiver;
}

class Component extends React.Component<IProps, object> {

  public render() {
    const { receiver } = this.props;

    return (
      <address>
        <strong>{receiver.companyName}</strong><br />
        <span>T.a.v. {receiver.contactName}<br /></span>
        <i>{receiver.address}</i><br />
        <i>{receiver.zipCode} {receiver.city}</i>
        <br />
        {receiver.contactEmail}
      </address>
    );
  }
}

export default Component;
