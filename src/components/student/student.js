import React, { Component } from 'react';
import StudentsService from '../../services/students-service';

class Student extends Component {
  render() {
    // get object values
    const {
      pic,
      firstName,
      lastName,
      email,
      company,
      grades,
      skill
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
            <li>Skill: {skill}</li>
            <li> Average: {StudentsService.getAverage(grades)}</li>
          </ul>
        </div>
      </div>
    );
  }
}
Student.defaultProps = {
  student: {}
};

export default Student;
