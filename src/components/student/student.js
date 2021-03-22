import React, { Component } from 'react';

export default class Student extends Component {
  defaultProps = {
    student: {}
  };

  render() {
    const {
      pic,
      firstName,
      lastName,
      email,
      company,
      grades
    } = this.props.student;
    return (
      <div
        className='student-container
      '
      >
        <div className='left-side'>
          <img src={pic} alt='avatar' />
        </div>

        <div className='right-side'>
          <h1>
            {firstName.toUpperCase()} {lastName.toUpperCase()}
          </h1>
          <ul>
            <li>Email: {email}</li>
            <li>Company: {company}</li>
            <li> Average: {grades}</li>
          </ul>
        </div>
      </div>
    );
  }
}
