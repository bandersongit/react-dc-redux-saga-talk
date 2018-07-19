import * as React from 'react';

export interface Props {
    task: string;
    isCompleted: boolean;
    toggleCompletion: VoidFunction;
    removeTodo: VoidFunction;
}

const todoStyles: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    margin: "0.5em"
};

export class Todo extends React.PureComponent<Props> {
    render() {
        return (
            <div style={todoStyles}>
                <label>
                    <input type="checkbox" checked={this.props.isCompleted} onClick={this.props.toggleCompletion}/>
                    {this.props.task}
                </label>
                <button onClick={this.props.removeTodo} style={{ marginLeft: "1em" }}>Remove</button>
            </div>
        );
    }
}