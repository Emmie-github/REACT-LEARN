import React, { Component } from "react";
import Student from "./Student";
export default class StudentList extends Component {
  render() {
    const students = this.props.stus.map(item => (
      <Student key={item.id} {...item} />
    ));
    return (
      <ul>
        {/* 多个学生->传递学生数组 props.stus */}
        {students}
      </ul>
    );
  }
}
