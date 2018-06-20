import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

class AddDispatchForm extends React.Component {
  state = {
    complaint: '',
    location: '',
    received: '',
    dispatched: '',
    medics: '',
    secured: '',
    available: '',
    ambulanceCalled: '',
    ambulanceOnScene: '',
    notes: '',
  }

  handleChange = (event) => {
    let val = event.target.value;
    this.setState({ [event.target.name]: val});
  }

  createLog = (event) => {
    event.preventDefault();
    //this.props.addLog();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.createLog}>
          <div>
            <textarea name='complaint' placeholder='Complaint' onChange={this.handleChange}/>
          </div>
          <div>
            <textarea name='location' placeholder='Location' onChange={this.handleChange}/>
          </div>
          <div>
            Received:
            <input name='received' type='text' onChange={this.handleChange}/>
          </div>
          <div>
            Dispatched:
            <input name='dispatched' type='text' onChange={this.handleChange}/>
          </div>
          <div>
            Medic/Squad:
            <input name='medics' type='text' onChange={this.handleChange}/>
          </div>
          <div>
            Secured:
            <input name='secured' type='text' onChange={this.handleChange}/>
          </div>
          <div>
            Available:
            <input name='available' type='text' onChange={this.handleChange}/>
          </div>
          <div>
            Ambulance Called:
            <input name='ambulanceCalled' type='text' onChange={this.handleChange}/>
          </div>
          <div>
            Ambulance On-Scene:
            <input name='ambulanceOnScene' type='text' onChange={this.handleChange}/>
          </div>
          <div>
            <textarea name='notes' placeholder='Notes' onChange={this.handleChange}/>
          </div>
        </form>
      </div>
    );
  }
}

AddDispatchForm.PropTypes = {
};

export default AddDispatchForm;
