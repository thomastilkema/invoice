import * as React from 'react';

import { getDueDate, getInvoiceDate } from '@app/utility';

interface IProps {
  date: string;
  dueDays: number;
  id: string;
}

class Component extends React.Component<IProps, object> {

  public render() {
    const dateFormat = 'DD-MM-YYYY';
    const invoiceDate = getInvoiceDate(this.props.date);
    const dueDate = getDueDate(this.props.date, this.props.dueDays);

    return (
      <table className="invoice-dates">
        <tbody>
          <tr>
            <th>Factuurdatum:</th>
            <td>{invoiceDate.format(dateFormat)}</td>
          </tr>
          <tr>
            <th>Vervaldatum:</th>
            <td>{dueDate.format(dateFormat)}</td>
          </tr>
          <tr>
            <th>Factuurnummer:</th>
            <td>{this.props.id}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Component;
