import React from 'react';
import ReactDOM from 'react-dom';
import Container from './container/container';

import styles from './index.scss';

class App extends React.Component {
  render() {
    return (
      <Container />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('drum-machine'));