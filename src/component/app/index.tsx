import * as React from 'react';

import './style.css';

import Page from '@app/component/page';
import { IInvoice, IReceiver, ISender } from '@app/interface';

interface IProps {
  invoice: IInvoice;
  receiver: IReceiver;
  sender: ISender;
}

class Component extends React.Component<IProps, object> {

  public componentDidMount() {
    document.title = this.props.invoice.id;
  }

  public render() {
    return (
      <div className="container">
        {this.renderPages()}
      </div>
    );
  }

  private renderPages() {
    return this.props.invoice.pages.map((page, index) =>
      (
        <Page
          invoice={this.props.invoice}
          key={index}
          pageNumber={index + 1}
          receiver={this.props.receiver}
          sender={this.props.sender}
        />
      )
    );
  }
}

export default Component;
