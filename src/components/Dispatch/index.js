import React from 'react';
import AddDispatchForm from '../AddDispatchForm';
import styles from './index.module.css';

class Dispatch extends React.Component {
  state = {
    logs: {},
  };

  addLog = (log) => {
    const logs = { ...this.state.logs };
    logs[`log${Date.now()}`] = log;
    this.setState({logs});
  };

  render() {
    return (
      <div>
        <h1>EMRT Dispatch</h1>
        <AddDispatchForm addLog={this.addLog}/>
      </div>
    );
  }
}

export default Dispatch
