import * as React from 'react';

// tslint:disable-next-line:no-var-requires
const logo = require('@app/img/logo.png');
import './style.css';

import { IInvoice, IReceiver, ISender } from '@app/interface';

import InvoiceData from '../invoice-data';
import InvoiceReceiver from '../invoice-receiver';
import InvoiceSender from '../invoice-sender';

interface IProps {
  isCompact: boolean;
  invoice: IInvoice;
  receiver: IReceiver;
  sender: ISender;
}

class Component extends React.Component<IProps, object> {

  public render() {
    const { sender } = this.props;

    return (
      <div className="clearfix page-top">
        <div className="page-intro">
          <h1 className="page-title">Factuur</h1>

          {this.renderInvoiceDataAndReceiver()}
        </div>

        <div className="invoice-from">
          <a href={`http://${sender.site}`}>
            <img className="invoice-from__logo" src={logo} alt={`${sender.companyName} logo`} />
          </a>
          <em className="invoice-from__pay-off">{sender.payOff}</em>

          {this.renderSender()}
        </div>
      </div>
    );
  }

  private renderInvoiceDataAndReceiver() {
    if (this.props.isCompact) {
      return null;
    }

    const { invoice } = this.props;
    return (
      <div>
        <InvoiceData
          date={invoice.date}
          dueDays={invoice.dueDays}
          id={invoice.id}
        />

        <br/><br/><br/><br/><br/>

        <InvoiceReceiver
          receiver={this.props.receiver}
        />
      </div>
    );
  }

  private renderSender() {
    if (this.props.isCompact) {
      return null;
    }

    return (
      <div>
        <br/>

        <div className="color-gray-light">
          <InvoiceSender
            sender={this.props.sender}
          />
        </div>
      </div>
    );
  }

}

export default Component;
