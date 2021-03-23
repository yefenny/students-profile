import React, { Component } from 'react';
import StudentsService from '../../services/students-service';
import Student from '../student/student';

export default class StudentsList extends Component {
  state = {
    students: [],
    search: '',
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

  handleChange = async (value) => {
    await this.setState({
      search: value
    });
    StudentsService.getStudents().then((res) => {
      let filteredStudents = res.students.filter((student) => {
        let name = `${student.firstName.toLowerCase()} ${student.lastName.toLowerCase()}`;
        return name.includes(this.state.search);
      });
      this.setState({
        students: filteredStudents
      });
    });
  };

  render() {
    const { students, error, search } = this.state;
    const list = students.map((student) => {
      return (
        <li key={student.id}>
          <Student student={student} />
        </li>
      );
    });
    return (
      <div className='students-list-container'>
        <div className='error'>
          <p>{error}</p>
        </div>
        <input
          type='text'
          className='search'
          placeholder='Search by name'
          defaultValue={search}
          onChange={(e) => {
            this.handleChange(e.target.value);
          }}
        />
        <ul>{list}</ul>
      </div>
    );
  }
}
