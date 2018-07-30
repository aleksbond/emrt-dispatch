import React from 'react';
import PropTypes from 'prop-types';
import EditLogForm from '../EditLogForm';
// import styles from './index.module.css';

class Logs extends React.Component {

  render() {
    const renderEditLogForms = () => {
      return Object.keys(this.props.logs).map(key => {
        return <EditLogForm
          key={key}
          index={key}
          log={this.props.logs[key]}
          updateLog={this.props.updateLog}
        />
      })
    }

    return (
      renderEditLogForms()
    ); 
  }
}

Logs.propTypes = {
  updateLog: PropTypes.func.isRequired,
  logs: PropTypes.object.isRequired,
};

export default Logs;
