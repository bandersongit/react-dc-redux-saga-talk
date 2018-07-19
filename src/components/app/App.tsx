import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '@App/store/appState';
import { TodoListContainer } from '@App/components/todos/todoListContainer';

interface AppProps {
  isLoading: boolean; 
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
      </div> 
    );
  }
}

function mapStateToProps(state: State, ownProps: object): AppProps {
  return {
    isLoading: state.todos.isLoading
  };
}

export default connect(mapStateToProps)(App);