import * as React from 'react';

import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import { Redirect } from 'react-router-dom';

// import FontAwesomeIcon from '@fortawesome/react-fontawesome';

interface HeaderState {
  redirect: boolean;
}

class HeaderHome extends React.Component<any, HeaderState> {
  constructor(props: any) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  handleOnClickSignOut() {
    this.setState({redirect: true});
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/"/>;
    }

    return (
      <header className="header_home">
        <div>
          <IconMenu 
            className="user_picture"
            iconButtonElement={<IconButton/>}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
          >
            <MenuItem onClick={() => this.handleOnClickSignOut()} leftIcon={<ExitToApp />} primaryText="Sign Out" />
          </IconMenu>
        </div>
      </header>
    );
  }
}

export default HeaderHome;
