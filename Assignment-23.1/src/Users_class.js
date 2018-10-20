import React, { Component } from 'react';
import User from './User_func'

// Received props in Class component
class Users extends Component {
  render() {
    return (
      <div>
        <h1>User List</h1>
        <div className="list">
          <ol>
            <li><User age="30">Max</User></li>
            <li><User age="23">Phil</User></li>
            <li><User age="33">Leo</User></li>
            <li><User age="25">Cris</User></li>
          </ol>
        </div>       
      </div>
    );
  }
}

export default Users;
