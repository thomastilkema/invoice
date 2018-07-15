import * as React from 'react';

import { IInvoicePage } from '@app/interface';
import { formatMoney, getTotal } from '@app/utility';

interface IProps {
  pages: IInvoicePage[];
}

class Component extends React.Component<IProps, object> {

  public render() {
    const total = getTotal(this.props.pages);

    return (
      <tr className="total">
        <td colSpan={2} />
        <th className="text-right">Totaal</th>
        <td className="text-right">{formatMoney(total)}</td>
        <td />
      </tr>
    );
  }
}

export default Component;
