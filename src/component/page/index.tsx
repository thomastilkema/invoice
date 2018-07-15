import * as React from 'react';

import './style.css';

import { IInvoice, IReceiver, ISender } from '@app/interface';

import Attachments from '../attachments';
import Charges from '../charges';
import PageBottom from '../page-bottom';
import PageContinue from '../page-continue';
import PageContinued from '../page-continued';
import PageTop from '../page-top';
import PayRequest from '../pay-request';

interface IProps {
  invoice: IInvoice;
  pageNumber: number;
  receiver: IReceiver;
  sender: ISender;
}

class Component extends React.Component<IProps, object> {

  private isFirstPage: boolean;
  private isLastPage: boolean;
  private numberOfPages: number;

  public constructor(props: IProps) {
    super(props);

    this.numberOfPages = props.invoice.pages.length;
    this.isFirstPage = props.pageNumber === 1;
    this.isLastPage = props.pageNumber === this.numberOfPages;
  }

  public render() {
    return (
      <div className="page" id={`page-${this.props.pageNumber}`}>
        <PageTop
          invoice={this.props.invoice}
          isCompact={!this.isFirstPage}
          receiver={this.props.receiver}
          sender={this.props.sender}
        />

        <div className="content">
          {this.renderPageContinued()}

          <Charges
            displayInvoiceTotals={this.isLastPage}
            pageNumber={this.props.pageNumber}
            pages={this.props.invoice.pages}
          />

          {this.renderPageContinue()}
          {this.renderAttachments()}
          {this.renderPayRequest()}
        </div>

        <PageBottom
          invoiceDate={this.props.invoice.date}
          invoiceSentDate={this.props.invoice.sent}
          numberOfPages={this.numberOfPages}
          pageNumber={this.props.pageNumber}
          receiverEmail={this.props.receiver.contactEmail}
          senderWebsite={this.props.sender.site}
        />
      </div>
    );
  }

  private renderPageContinued() {
    if (this.isFirstPage) {
      return null;
    }

    return (
      <PageContinued
        previousPageNumber={this.props.pageNumber - 1}
      />
    );
  }

  private renderPageContinue() {
    if (this.isLastPage) {
      return null;
    }

    return (
      <PageContinue
        nextPageNumber={this.props.pageNumber + 1}
        numberOfPages={this.numberOfPages}
      />
    );
  }

  private renderAttachments() {
    if (!this.isLastPage) {
      return null;
    }

    return (
      <Attachments
        attachments={this.props.invoice.attachments}
      />
    );
  }

  private renderPayRequest() {
    if (!this.isLastPage) {
      return null;
    }

    return (
      <PayRequest
        invoice={this.props.invoice}
        sender={this.props.sender}
      />
    );
  }
}

export default Component;
