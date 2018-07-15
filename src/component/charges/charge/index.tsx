import * as React from 'react';

import { ICharge } from '@app/interface';
import * as utility from '@app/utility';

interface IProps {
  charge: ICharge;
}

class Component extends React.Component<IProps, object> {

  public render() {
    const { description, quantity, rate } = this.props.charge;
    const vatPercentage = utility.getVatPercentage(this.props.charge.vatPercentage);

    return (
      <tr>
        <td className="text-right">{utility.formatNumber(quantity)}</td>
        <td>{description}</td>
        <td className="text-right">{utility.formatMoney(rate)}</td>
        <td className="text-right">{utility.formatMoney(utility.getChargeTotal(quantity, rate))}</td>
        <td className="text-right">{utility.formatPercentage(vatPercentage)}</td>
      </tr>
    );
  }
}

export default Component;
