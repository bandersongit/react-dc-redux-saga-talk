import { connect } from 'react-redux';
import { Todo } from './todo';
import { Dispatch } from 'redux';
import { AppActionType } from '@App/store/actions';
import { Props } from './todo';
import { removeTodo } from '@App/store/todos/todoActions';

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
