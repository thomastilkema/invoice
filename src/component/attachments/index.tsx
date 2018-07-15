import * as React from 'react';

import './style.css';

interface IProps {
  attachments: string[];
}

class Component extends React.Component<IProps, object> {

  public render() {
    if (this.props.attachments.length === 0) {
      return null;
    }

    return (
      <ul className="attachments">
        {this.renderAttachments()}
      </ul>
    );
  }

  private renderAttachments() {
    const shouldNumberAttachments = this.props.attachments.length > 1;
    return this.props.attachments.map((attachment, index) =>
      (
        <li
          key={index}
        >
          Bijlage{shouldNumberAttachments ? ` ${index + 1}` : ''}: {attachment}
        </li>
      )
    );
  }
}

export default Component;
