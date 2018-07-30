import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

class EditLogForm extends React.Component {
  state = { ...this.props.log }

  formatDate(rawDate) {
    return rawDate.toLocaleString('en-US', { weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: true });
  }

  handleChange = (event) => {
    const val = event.target.value;
    const updatedLog = {
      ...this.props.log,
      [event.target.name]: val
    }
    this.props.updateLog(this.props.index, updatedLog);
    this.setState({ [event.target.name]: val});
  }

  render() {
    return (
      <div className={styles.editForm}>
        <div>
          <div className={styles.field}>
            Complaint<br />
            <textarea value={this.state.complaint} name='complaint' placeholder='Complaint' onChange={this.handleChange}/>
          </div>
          <div className={styles.field}>
            Location<br />
            <textarea value={this.state.location} name='location' placeholder='Location' onChange={this.handleChange}/>
          </div>
        </div>
        <div>
          <div className={styles.field}>
            Medic/Squad:
            <input value={this.state.medics} name='medics' type='text' onChange={this.handleChange}/>
          </div>
          <div className={styles.field}>
            Received:
            <input name='received' type='text' value={this.formatDate(this.state.received)} onChange={this.handleChange}/>
            <button type='button' name='received' onClick={this.fillDate}>&#10003;</button>
          </div>
          <div className={styles.field}>
            Dispatched:
            <input name='dispatched' type='text' value={this.formatDate(this.state.dispatched)} onChange={this.handleChange}/>
            <button type='button' name='dispatched' onClick={this.fillDate}>&#10003;</button>
          </div>
          <div className={styles.field}>
            Secured:
            <input name='secured' type='text' value={this.formatDate(this.state.secured)} onChange={this.handleChange}/>
            <button type='button' name='secured' onClick={this.fillDate}>&#10003;</button>
          </div>
          <div className={styles.field}>
            Available:
            <input name='available' type='text' value={this.formatDate(this.state.available)} onChange={this.handleChange}/>
            <button type='button' name='available' onClick={this.fillDate}>&#10003;</button>
          </div>
        </div>
        <div>
          <div className={styles.field}>
            Ambulance Called:
            <input name='ambulanceCalled' type='text' value={this.formatDate(this.state.ambulanceCalled)} onChange={this.handleChange}/>
            <button type='button' name='ambulanceCalled' onClick={this.fillDate}>&#10003;</button>
          </div>
          <div className={styles.field}>
            Ambulance On-Scene:
            <input name='ambulanceOnScene' type='text' value={this.formatDate(this.state.ambulanceOnScene)} onChange={this.handleChange}/>
            <button type='button' name='ambulanceOnScene' onClick={this.fillDate}>&#10003;</button>
          </div>
        </div>
        <div>
          <div className={styles.field}>
            Notes<br />
            <textarea value={this.state.notes} name='notes' placeholder='Notes' onChange={this.handleChange}/>
          </div>
        </div>
      </div>
    ); 
  }
}

EditLogForm.propTypes = {
  key: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  log: PropTypes.object.isRequired,
  updateLog: PropTypes.func.isRequired,
};

export default EditLogForm;
