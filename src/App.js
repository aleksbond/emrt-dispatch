import React, { Component } from 'react';
import Dispatch from './components/Dispatch';
import logo from './logo.svg';
import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Dispatch/>   
      </div>
    );
  }
}

export default App;
