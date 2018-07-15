import * as React from 'react';

import { IInvoicePage } from '@app/interface';
import { formatMoney, getPreviousPagesSubtotal } from '@app/utility';

interface IProps {
  pages: IInvoicePage[];
  previousPageNumber: number;
}

class Component extends React.Component<IProps, object> {

  public render() {
    const { previousPageNumber } = this.props;
    const text = `Subtotaal van pagina ${previousPageNumber > 1 ? `1 t/m ${previousPageNumber}` : 1}`;
    const previousPagesSubtotal = getPreviousPagesSubtotal(this.props.pages, this.props.previousPageNumber);

    return (
      <tr>
        <th colSpan={3} className="text-right">{text}</th>
        <td className="text-right">{formatMoney(previousPagesSubtotal)}</td>
      </tr>
    );
  }
}

export default Component;
