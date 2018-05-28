import * as React from 'react';
import { Redirect } from 'react-router-dom';
import IconClose from 'material-ui/svg-icons/navigation/close';

class CloseButton extends React.Component<any, RedirectState> {
  constructor(props: any) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  handleOnClickClose() {
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }

    return (
      <div>
        <IconClose title="Close" class="close_button" onClick={() => this.handleOnClickClose()} />
      </div>
    );
  }
}

export default CloseButton;
