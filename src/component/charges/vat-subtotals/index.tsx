import * as React from 'react';

import { IInvoicePage } from '@app/interface';
import { formatMoney, formatPercentage, getVatSubtotals } from '@app/utility';

interface IProps {
  pages: IInvoicePage[];
}

class Component extends React.Component<IProps, object> {

  public render() {
    return (
      <React.Fragment>
        {this.renderRows()}
      </React.Fragment>
    );
  }

  private renderRows() {
    return getVatSubtotals(this.props.pages).map(({ vatPercentage, subtotal }, index) =>
      (
        <tr key={index}>
          <th colSpan={3} className="text-right">{formatPercentage(vatPercentage)} BTW</th>
          <td className="text-right">{formatMoney(subtotal)}</td>
        </tr>
      )
    );
  }
}

export default Component;
