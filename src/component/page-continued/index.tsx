import * as React from 'react';

interface IProps {
  previousPageNumber: number;
}

class Component extends React.Component<IProps, object> {

  public render() {
    const { previousPageNumber } = this.props;
    return (
      <p className="follow-up">Dit is een vervolg van <a href={`#page-${previousPageNumber}`}>pagina {previousPageNumber}</a></p>
    );
  }
}

export default Component;
