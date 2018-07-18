import * as React from 'react';
import * as css from '@App/components/app/App.css';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { MouseEvent } from 'react';
interface AppProps {

}

interface AppProps {
  counter: Readonly<number>;
  actions: {
    add: (n: number) => void
  };
}

interface AppState {

}

class App extends React.Component<AppProps, AppState> {
  public constructor(props: AppProps, context: object) {
    super(props, context);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  protected onButtonClick(e: MouseEvent<HTMLButtonElement>) {
    this.props.actions.add(1);
  }

  public render() {
    return (
      <div className={css.App}>
        <header className={css.appHeader}>
          <h1 className={css.appTitle}>Welcome to React</h1>
        </header>
        <p className={css.appIntro}>
          To get started, edit <code>src/app/App.tsx</code> and save to reload.
        </p>
        <button className={css.button} onClick={this.onButtonClick}>Click to test ACTION</button>
        <span className={css.counter}>{this.props.counter}</span>
      </div>
    );
  }
}

function mapStateToProps(state: object, ownProps: object) {
  return {
    counter: 7
  };
}

function mapDispatchToProps(dispatch: Dispatch<object>) {
  return {
    actions: {
      add: (arg: number) => { return; }
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);