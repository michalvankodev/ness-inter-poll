import * as React from 'react';
// import { PollsData } from '../interfaces/PollsData';
import PollItem from './PollItem';

const PollList = (props) => {
  const pollItems = props.polls_data.map((pollData) => {
    console.log(pollData);
    return <PollItem key={pollData.id} poll_data={pollData} />;
  });

  console.log(pollItems);
  return (
    <div className="pool_list_container">
      <button className="add_poll" onClick={props.action} />
      {pollItems}
    </div>
  );
};

export default PollList;
