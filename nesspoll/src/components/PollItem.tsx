import * as React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import { PollsData } from '../interfaces/PollsData';

const PollItem = (props) => {
  return (
    <div className="poll_item">
      <div className="poll_item_status_indicator">
        <span />
      </div>
      <div className="poll_item_content">
        <div className="poll_item_name">
          <p>{props.poll_data.name}</p>
        </div>
        <div className="poll_item_status">
          <p>{props.poll_data.status}</p>
        </div>
      </div>
      <div className="poll_item_burger">
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="Stats" />
          <MenuItem primaryText="Edit" />
          <MenuItem primaryText="Delete" />
        </IconMenu>
      </div>
    </div>
  );
};

export default PollItem;
