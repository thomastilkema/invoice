import * as React from 'react';

import { ISender } from '@app/interface';

interface IProps {
  sender: ISender;
}

class Component extends React.Component<IProps, object> {

  public render() {
    const { sender } = this.props;

    return (
      <div>
        <address className="invoice-from__info">
          <strong>{sender.companyName}</strong><br/>
          {sender.contactName}<br/>
          <i>{sender.address}</i><br/>
          <i>{sender.zipCode} {sender.city}</i><br/>
          <a href={`http://${sender.site}`}>{sender.site}</a><br/>
        </address>

        <br/>

        <table className="invoice-from__details invoice-from__info">
          <tbody>
            <tr>
              <th>KvK:</th>
              <td>{sender.cocNo}</td>
            </tr>
            <tr>
              <th>BTW:</th>
              <td>{sender.vatNo}</td>
            </tr>
            <tr>
              <th>IBAN:</th>
              <td>{sender.iban}</td>
            </tr>
            <tr>
              <th>BIC:</th>
              <td>{sender.bic}</td>
            </tr>
          </tbody>
        </table>

        <br/>

        <a href={`mailto:${sender.email}`}>{sender.email}</a><br/>
        {sender.phone}
      </div>
    );
  }
}

export default Component;
