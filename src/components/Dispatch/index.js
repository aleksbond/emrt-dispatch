import React from 'react';
import AddLogForm from '../AddLogForm';
import Logs from '../Logs';
import styles from './index.module.css';

class Dispatch extends React.Component {
  state = {
    logs: [],
  };

  addLog = (log) => {
    const logs = [ ...this.state.logs ];
    log.id = `log${Date.now()}`;
    logs.unshift(log);
    this.setState({ logs });
  };

  updateLog = (key, updatedLog) => {
    let logs = [ ...this.state.logs ];
    const logIndex = logs.findIndex((log => log.id === key));
    logs[logIndex] = updatedLog;
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
