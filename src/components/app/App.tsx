import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '@App/store/appState';
import { TodoListContainer } from '@App/components/todos/todoListContainer';
import { AppActionType } from '@App/store/actions';
import { Dispatch } from 'redux';
import { showProgress } from '@App/todos/todoActions';

interface AppProps {
  isLoading: boolean; 
  hasProgress: boolean;
  viewProgress: VoidFunction;
}

const appStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

class App extends React.Component<AppProps> {
  public render() {
    return (
      <div style={appStyles}>
        <h1>Async Todo MVC</h1>
        { 
          this.props.isLoading
            ? "Loading..."
            : <TodoListContainer />
        }
        {this.props.hasProgress &&
        <button onClick={this.props.viewProgress}>
          See what I've done!  
        </button>}
      </div> 
    );
  }
}

function mapStateToProps(state: State): Partial<AppProps> {
  return {
    isLoading: state.todos.isLoading,
    hasProgress: state.todos.isLoading 
      ? false
      : state.todos.hasProgress
  };
}

function mapDispatchToProps(dispatch: Dispatch<AppActionType>): Partial<AppProps> {
  return {
    viewProgress: () => dispatch(showProgress())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);