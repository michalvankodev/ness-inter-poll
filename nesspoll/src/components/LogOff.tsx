import * as React from 'react';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import { Redirect } from 'react-router-dom';

export class LogOff extends React.Component<any, RedirectState> {
    constructor(props: any) {
        super(props);
        this.state = ({
            redirect: false
        });
       }
    
    handleOnLogOff() {
        this.setState({redirect: true});
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/"/>;
        }

        return (
            <div>
                <ExitToApp title="LogOff" class="log_off_button" onClick={() => this.handleOnLogOff()}/>
            </div>
        );
    }
}
  
export default LogOff;