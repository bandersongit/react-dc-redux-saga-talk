import * as React from 'react';
import TodoContainer from './todoContainer';

interface Props {
    todos: { task: string, isCompleted: boolean, id: string }[];
    addTodo: (task: string) => void;
}

export class TodoList extends React.PureComponent<Props> {
    render() {
        return this.props.todos.map(t => (
            <TodoContainer 
                key={t.id}
                id={t.id}
                task={t.task}
                isCompleted={t.isCompleted} 
            />
        ));
    }
}