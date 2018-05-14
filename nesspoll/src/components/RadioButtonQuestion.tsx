import * as React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { TextField } from 'material-ui';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

interface RadioButtonQuestionState {
    radioButtons: Array<RadioButton>;
}

class RadioButtonQuestion extends React.Component<any, RadioButtonQuestionState> {
    private data: Array<Value>;

    constructor(props: any) {
        super(props);

        this.data = [
            new Value('1', ''),
            new Value('2', '')
        ];

        this.state = ({
            radioButtons: this.getRadioButtons()
        });
    }

    getRadioButtons() {
        return this.data.map((v) => {
            return <RadioButton key="test" value={v.value} label={v.label} />;
        });
    }

    addRadioButton() {
        this.data.push(new Value('3', ''));
        
        this.setState({
            radioButtons: this.getRadioButtons()
        });

        console.log(this.data);
    }

    render() {
        return (
            <div>
                <div>
                    <RadioButtonGroup>
                        {this.state.radioButtons}
                    </RadioButtonGroup>
                    <TextField
                        hintText="Other"
                        multiLine={true}
                        rows={2}
                        rowsMax={4}
                    />
                </div>
                <div>
                    <FloatingActionButton backgroundColor="green" onClick={() => this.addRadioButton()} >
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </div>
        );
    }
}

class Value {
    public value: string;
    public label: string;

    constructor(value: string, label: string) {
        this.value = value;
        this.label = label;
    }
}

export default RadioButtonQuestion;