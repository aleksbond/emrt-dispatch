import React from 'react';
import PropTypes from 'prop-types';
import EditLogForm from '../EditLogForm';
import styles from './index.module.css';

class Logs extends React.Component {

  render() {
    const renderEditLogForms = () => {
      return this.props.logs.map(log => {
        return <EditLogForm
          key={log.id}
          index={log.id}
          log={log}
          updateLog={this.props.updateLog}
        />
      })
    }

    return (
      <div className={styles.logList}>
        {renderEditLogForms()}
      </div>
    );
  }
}

Logs.propTypes = {
  updateLog: PropTypes.func.isRequired,
  logs: PropTypes.array.isRequired,
};

export default Logs;
