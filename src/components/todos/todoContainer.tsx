import { connect } from 'react-redux';
import { Todo } from '@App/components/todos/todo';
import { Dispatch } from 'redux';
import { AppActionType } from '@App/store/actions';
import { Props } from '@App/components/todos/todo';
import { removeTodo } from '@App/todos/todoActions';

interface OwnProps {
    id: string;
    task: string;
    isCompleted: boolean;
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionType>, ownProps: OwnProps): Partial<Props> => {
    return {
        task: ownProps.task,
        isCompleted: ownProps.isCompleted,
        removeTodo: () => dispatch(removeTodo({ id: ownProps.id })),
    };
};

export default connect(undefined, mapDispatchToProps)(Todo);
