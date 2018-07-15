import * as React from 'react';

import './style.css';

interface IProps {
  nextPageNumber: number;
  numberOfPages: number;
}

class Component extends React.Component<IProps, object> {

  public render() {
    const { nextPageNumber } = this.props;

    return (
      <p className="follow-up text-right">
        Dit overzicht gaat verder op <a href={`#page-${nextPageNumber}`}>pagina {nextPageNumber}</a> ({this.getNextPageDescription()})
      </p>
    );
  }

  private getNextPageDescription() {
    const nextPageIsFinalPage = this.props.nextPageNumber === this.props.numberOfPages;
    return nextPageIsFinalPage ? 'laatste pagina' : `van ${this.props.numberOfPages}`;
  }
}

export default Component;
