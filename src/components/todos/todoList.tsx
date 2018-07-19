import * as React from 'react';
import TodoContainer from '@App/components/todos/todoContainer';

export interface Props {
    todos: { task: string, isCompleted: boolean, id: string }[];
}

const todoListStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left"
};

export class TodoList extends React.PureComponent<Props> {
    render() {
        return (
            <div style={todoListStyles}>
                {
                    this.props.todos.map(t => (
                        <TodoContainer 
                            key={t.id}
                            id={t.id}
                            task={t.task}
                            isCompleted={t.isCompleted} 
                        />
                    ))
                }
            </div>
        );
    }
}