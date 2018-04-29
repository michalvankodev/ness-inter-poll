import * as React from 'react';
// import { PollsData } from '../interfaces/PollsData';
import PollItem from './PollItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const PollList = (props) => {
  const pollItems = props.polls_data.map((pollData) => {
    console.log(pollData);
    return <PollItem key={pollData.id} poll_data={pollData} />;
  });

  console.log(pollItems);
  return (
    <div className="pool_list_container">
      <FloatingActionButton className="add_poll" onClick={props.action}>
        <ContentAdd />
      </FloatingActionButton>
      {pollItems}
    </div>
  );
};

export default PollList;
