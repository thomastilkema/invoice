import * as moment from 'moment';
import * as React from 'react';

import './style.css';

interface IProps {
  invoiceDate: string;
  invoiceSentDate: string;
  numberOfPages: number;
  pageNumber: number;
  receiverEmail: string;
  senderWebsite: string;
}

class Component extends React.Component<IProps, object> {

  public render() {
    const sentDate = moment(this.props.invoiceSentDate || this.props.invoiceDate || undefined);
    const sentDateFormat = sentDate.format('dddd D MMMM YYYY');

    return (
      <div className="page-bottom">
        <p className="text-center m-0">
          <em>Deze verkoopfactuur is op {sentDateFormat} per e-mail verstuurd naar {this.props.receiverEmail}</em>
        </p>

        <hr/>

        <div className="clearfix">
          <p className="float-right m-0">
            Op deze factuur zijn de voorwaarden van toepassing die je vindt op {'\n'}
            <a href={`http://${this.props.senderWebsite}/voorwaarden/`}>{this.props.senderWebsite}/voorwaarden</a>
          </p>
          <p className="float-left m-0">
            Pagina {this.props.pageNumber} van {this.props.numberOfPages}
          </p>
        </div>
      </div>
    );
  }
}

export default Component;
