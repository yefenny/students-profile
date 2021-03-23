import React, { Component } from 'react';
import StudentsService from '../../services/students-service';

class Student extends Component {
  state = {
    toggled: false
  };
  handleToggle = () => {
    this.setState({
      toggled: !this.state.toggled
    });
  };
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

    const { toggled } = this.state;
    const list = grades.map((val, index) => {
      return <li key={index}>{` Test ${index + 1}: ${val}%`}</li>;
    });
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
            <ul className={toggled ? 'grades' : 'hidden grades'}>{list}</ul>
          </ul>
        </div>
        <div className='last-side'>
          <button onClick={this.handleToggle}>{toggled ? '-' : '+'}</button>
        </div>
      </div>
    );
  }
}
Student.defaultProps = {
  student: {}
};

export default Student;
