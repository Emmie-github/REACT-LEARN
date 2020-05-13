import React, { Component } from "react";
import Pager from "./Pager";
import StudentList from "./StudentList";
import Modal from "./Modal";

export default class PagerTest extends Component {
  state = {
    current: 1,
    total: 0,
    limit: 10,
    panelNumber: 5,
    students: [],
    isLoading: false
  };
  constructor(props) {
    super(props);
    this.fetchStudents();
  }
  /**获取所有学生 */
  async fetchStudents() {
    this.setState({
      isLoading: true
    });
    const resp = await fetch(
      `http://api.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${this.state.current}&size=${this.state.limit}`
    )
      .then(resp => resp.json())
      .then(resp => resp.data);
    this.setState({
      total: resp.cont,
      students: resp.findByPage,
      isLoading: false
    });
  }

  /**页码更改事件 */
  handlePageChange = newPage => {
    // console.log(newPage);
    this.setState({
      current: newPage
    });
    this.fetchStudents();
  };
  render() {
    return (
      <div className="container">
        <StudentList stus={this.state.students} />
        <div className="pager">
          <Pager {...this.state} onPageChange={this.handlePageChange} />
        </div>
        <Modal show={this.state.isLoading} />
      </div>
    );
  }
}