import { connect } from 'react-redux';
import { Props, AddTodo } from '@App/components/todos/addTodo';
import { Dispatch } from 'redux';
import { AppActionType } from '@App/store/actions';
import { createTodo } from '@App/todos/todoActions';

const mapDispatchToProps = (dispatch: Dispatch<AppActionType>): Props => {
    return {
        onSubmit: (task: string) => dispatch(createTodo({task}))
    };
};

export const AddTodoContainer = connect(undefined, mapDispatchToProps)(AddTodo);
