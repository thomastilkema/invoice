import * as React from 'react';

import './style.css';

import { ICharge, IInvoicePage } from '@app/interface';
import * as utility from '@app/utility';

import Charge from './charge';
import InvoiceTotal from './invoice-total';
import PreviousPagesTotal from './previous-pages-total';
import VatSubtotals from './vat-subtotals';

interface IProps {
  displayInvoiceTotals: boolean;
  pageNumber: number;
  pages: IInvoicePage[];
}

class Component extends React.Component<IProps, object> {

  public render() {
    const charges = this.props.pages[this.props.pageNumber - 1];

    return (
      <table className="table table--invoice">
        <thead>
          <tr>
            <th className="table--invoice__column-quantity"><span className="sr-only">Aantal</span></th>
            <th>Omschrijving</th>
            <th className="table--invoice__column-amount text-right">Bedrag</th>
            <th className="table--invoice__column-total text-right">Totaal</th>
            <th className="table--invoice__column-vat text-right">BTW</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th colSpan={3} className="text-right">Subtotaal</th>
            <td className="text-right">{utility.formatMoney(utility.getChargesTotal(charges))}</td>
          </tr>
          {this.renderPreviousPagesTotal()}
          {this.renderVatSubtotals()}
          {this.renderInvoiceTotal()}
        </tfoot>
        <tbody>
          {this.renderCharges(charges)}
        </tbody>
      </table>
    );
  }

  private renderCharges(charges: ICharge[]) {
    return charges.map((charge, index) =>
      (
        <Charge
          charge={charge}
          key={index}
        />
      )
    );
  }

  private renderPreviousPagesTotal() {
    if (this.props.pageNumber === 1) {
      return null;
    }

    return (
      <PreviousPagesTotal
        pages={this.props.pages}
        previousPageNumber={this.props.pageNumber - 1}
      />
    );
  }

  private renderVatSubtotals() {
    if (!this.props.displayInvoiceTotals) {
      return null;
    }

    return (
      <VatSubtotals
        pages={this.props.pages}
      />
    );
  }

  private renderInvoiceTotal() {
    if (!this.props.displayInvoiceTotals) {
      return null;
    }

    return (
      <InvoiceTotal
        pages={this.props.pages}
      />
    );
  }
}

export default Component;
