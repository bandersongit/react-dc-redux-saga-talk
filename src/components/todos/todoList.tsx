import * as React from 'react';
import TodoContainer from '@App/components/todos/todoContainer';

export interface Props {
    todos: { task: string, isCompleted: boolean, id: string }[];
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