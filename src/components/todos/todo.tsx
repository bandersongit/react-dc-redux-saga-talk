import * as React from 'react';

export interface Props {
    task: string;
    isCompleted: boolean;
    toggleCompletion: VoidFunction;
    removeTodo: VoidFunction;
}

export class Todo extends React.PureComponent<Props> {
    render() {
        return (
            <div>
                <input type="checkbox" checked={this.props.isCompleted} onClick={this.props.toggleCompletion}/>
                <p>{this.props.task}</p>
                <h1 onClick={this.props.removeTodo}>X</h1>
            </div>
        );
    }
}