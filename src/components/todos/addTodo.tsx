import * as React from 'react';

export interface Props {
    onSubmit: (task: string) => void;
}

interface State {
    todo: string;
}

const formStyles: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    margin: "1em"
};

export class AddTodo extends React.PureComponent<Props, State> {
    state: State = {
        todo: ""
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={formStyles}>
                <input type="text" value={this.state.todo} onChange={this.handleChange}/>
                <button type="submit">Create new</button>
            </form>
        );
    }

    handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            todo: e.currentTarget.value
        });
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.onSubmit(this.state.todo);
        this.setState({
            todo: ""
        });
    }
}