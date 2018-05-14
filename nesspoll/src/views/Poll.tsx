import * as React from 'react';
import RadioButtonQuestion from '../components/RadioButtonQuestion';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {} from 'material-ui/styles/colors';

const materialTheme = getMuiTheme({
});

/* tslint:disable no-any */
class Poll extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
       }

render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={materialTheme}>
          <RadioButtonQuestion/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Poll;