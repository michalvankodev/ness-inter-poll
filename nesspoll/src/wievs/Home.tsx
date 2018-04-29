import * as React from 'react';
import HeaderHome from '../components/HeaderHome';
import PoolList from '../components/PollList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// import { PollsData } from '../interfaces/PollsData';

export const materialTheme = getMuiTheme({
});

/* tslint:disable no-any */
class Home extends React.Component<any, any> {
  private testVariable;
  /* tslint:disable no-any */
  constructor(props: any) {
    super(props);

    this.handler = this.handler.bind(this);

    this.state = {
      polls_data: [
        {
          id: 1231,
          name: 'Pool Name',
          status: 'Live',
          status_id: 1,
          date_start: new Date('December 17, 2018 03:24:00'),
          date_end: new Date('December 20, 2018 03:24:00')
        }, {
          id: 12341,
          name: 'Pool Name',
          status: 'Finished',
          status_id: 2,
          date_start: new Date('December 17, 2018 03:24:00'),
          date_end: new Date('December 20, 2018 03:24:00')
        }, {
          id: 135742,
          name: 'Pool Name',
          status: 'Scheduled',
          status_id: 3,
          date_start: new Date('December 17, 2018 03:24:00'),
          date_end: new Date('December 20, 2018 03:24:00')
        }
      ]
    };

    this.testVariable = [
      {
        id: 1231,
        name: 'Pool Name',
        status: 'Live',
        status_id: 1,
        date_start: new Date('December 17, 2018 03:24:00'),
        date_end: new Date('December 20, 2018 03:24:00')
      }, {
        id: 12341,
        name: 'Pool Name',
        status: 'Finished',
        status_id: 2,
        date_start: new Date('December 17, 2018 03:24:00'),
        date_end: new Date('December 20, 2018 03:24:00')
      }, {
        id: 135742,
        name: 'Pool Name',
        status: 'Scheduled',
        status_id: 3,
        date_start: new Date('December 17, 2018 03:24:00'),
        date_end: new Date('December 20, 2018 03:24:00')
      }
    ];
  }

  handler() {
    this.testVariable.push({
      id: 135742,
      name: 'U pushed the button',
      status: 'Finished',
      status_id: 2,
      date_start: new Date('December 17, 2018 03:24:00'),
      date_end: new Date('December 20, 2018 03:24:00')
    });

    this.setState({
      polls_data: this.testVariable
    });
  }

  render() {
    return (
      <div className="app_container">
        <MuiThemeProvider muiTheme={materialTheme}>
          <HeaderHome />
          <PoolList polls_data={this.state.polls_data} action={this.handler}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Home;
