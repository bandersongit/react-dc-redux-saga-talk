import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '@App/store/appState';
import { TodoListContainer } from '@App/components/todos/todoListContainer';

interface AppProps {
  isLoading: boolean; 
}

class App extends React.Component<AppProps> {
  public render() {
    return this.props.isLoading
      ? <div>Loading....</div>
      : <TodoListContainer />;
  }
}

function mapStateToProps(state: State, ownProps: object): AppProps {
  return {
    isLoading: state.todos.isLoading
  };
}

export default connect(mapStateToProps)(App);