import React, { Component } from 'react';
import StudentsService from '../../services/students-service';
import Student from '../student/student';

export default class StudentsList extends Component {
  state = {
    students: [],
    error: null
  };

  componentDidMount = () => {
    StudentsService.getStudents()
      .then((res) => {
        this.setState({
          students: res.students
        });
      })
      .catch((res) => {
        this.setState({ error: res });
      });
  };

  render() {
    const { students, error } = this.state;
    const list = students.map((student) => {
      return (
        <li key={student.id}>
          <Student student={student} />
        </li>
      );
    });
    return (
      <div className='students-list-container'>
        <ul>{list}</ul>
      </div>
    );
  }
}
