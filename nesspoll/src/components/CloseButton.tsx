import * as React from 'react';
import { Redirect } from 'react-router-dom';
import IconClose from 'material-ui/svg-icons/navigation/close';

class CloseButton extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
          redirect: false,
        };
    }

    handleOnClickClose() {
        this.setState({redirect: true});
    }

    render() {
        const { redirect } = this.state;
    
        if (redirect) {
          return <Redirect to="/home"/>;
        }

        return (
          <div>
            <IconClose title="Close" class="close_button" onClick={() => this.handleOnClickClose()}/>            
          </div>
        );
    }
}

export default CloseButton;
