import React from 'react';
import AddDispatchForm from '../AddDispatchForm';
import styles from './index.module.css';

class Dispatch extends React.Component {
  render() {
    return (
      <div>
        <h1>EMRT Dispatch</h1>
        <AddDispatchForm />
      </div>
    );
  }
}

export default Dispatch
