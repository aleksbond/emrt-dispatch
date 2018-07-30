import React from 'react';
import AddLogForm from '../AddLogForm';
import Logs from '../Logs';
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

  updateLog = (key, updatedLog) => {
    const logs = { ...this.state.logs };
    logs[key] = updatedLog;
    this.setState({ logs });
  }

  render() {
    return (
      <div>
        <h1>EMRT Dispatch</h1>
        <AddLogForm addLog={this.addLog}/>
        <Logs logs={this.state.logs} updateLog={this.updateLog}/>
      </div>
    );
  }
}

export default Dispatch
