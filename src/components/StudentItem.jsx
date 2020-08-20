import React, { Component } from "react";
import { FaEdit, FaSave, FaTrash } from "react-icons/fa";
export default class StudentItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isEdit: false };
    this.editStudent = this.editStudent.bind(this);
    this.editStudentSubmit = this.editStudentSubmit.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
  }
  deleteStudent() {
    const { id } = this.props.student;
    this.props.deleteStudent(id);
  }
  editStudent() {
    this.setState((prevState, props) => ({
      isEdit: !prevState.isEdit,
    }));
  }
  editStudentSubmit() {
    const { id } = this.props.student;
    this.setState((prevState, props) => ({
      isEdit: !prevState.isEdit,
    }));

    this.props.editStudentSubmit(
      id,
      this.nameInput.value,
      this.gradeInput.value,
      this.schoolInput.value
    );
  }
  render() {
    const { name, grade, school } = this.props.student;
    return this.state.isEdit === true ? (
      <tr className="bg-warning" key={this.props.index}>
        <td>
          <input
            ref={(nameInput) => (this.nameInput = nameInput)}
            defaultValue={name}
          />
        </td>
        <td>
          <input
            defaultValue={grade}
            ref={(gradeInput) => (this.gradeInput = gradeInput)}
          />
        </td>
        <td>
          <input
            ref={(schoolInput) => (this.schoolInput = schoolInput)}
            defaultValue={school}
          />
        </td>
        <td>
          <FaSave onClick={this.editStudentSubmit}></FaSave>
        </td>
        <td>
          <FaTrash></FaTrash>
        </td>
      </tr>
    ) : (
      <tr key={this.props.index}>
        <td>{name}</td>
        <td>{grade}</td>
        <td>{school}</td>
        <td>
          <FaEdit onClick={this.editStudent}></FaEdit>
        </td>
        <td>
          <FaTrash onClick={this.deleteStudent}></FaTrash>
        </td>
      </tr>
    );
  }
}
