import { connect } from 'react-redux';
import { TodoList, Props } from './todoList';
import { State } from '@App/store/appState';

const mapStateToProps = (state: State): Partial<Props> => {
    if (!state.todos.isLoading) {
        return {
            todos: state.todos.todos
        };
    }
    throw "cannot render todo list while todos are loading";
};

export const TodoListContainer = connect(mapStateToProps)(TodoList);