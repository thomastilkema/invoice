import * as moment from 'moment';
import * as React from 'react';

import { IInvoice, ISender } from '@app/interface';
import { formatMoney, getDueDate, getTotal } from '@app/utility';

interface IProps {
  invoice: IInvoice;
  sender: ISender;
}

class Component extends React.Component<IProps, object> {

  public render() {
    const { invoice, sender } = this.props;
    const dueDate = getDueDate(invoice.date, invoice.dueDays);
    const dueDateFormat = dueDate.format('dddd D MMMM YYYY');
    const total = getTotal(invoice.pages);

    return (
      <p>
        Graag verzoek ik je het totaalbedrag van <strong>{formatMoney(total)} vòòr {dueDateFormat}</strong> over te maken naar
        rekeningnummer <strong>{sender.iban}</strong> ten name van <strong>{sender.companyName}</strong> onder vermelding van {'\n'}
        factuurnummer <strong>{invoice.id}</strong>. Voor vragen kun je me bellen op <strong>{sender.phone}</strong> of een e-mail {'\n'}
        sturen naar <a href={`mailto:${sender.email}`}>{sender.email}</a>.
      </p>
    );
  }
}

export default Component;
