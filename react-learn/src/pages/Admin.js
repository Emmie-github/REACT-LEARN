import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { Route, Switch } from "react-router-dom";
import Welcome from "./Welcome";
import StudentList from "./student/StudentList";
import StudentAdd from "./student/StudentAdd";
import CourseList from "./course/CourseList";
import CourseAdd from "./course/CourseAdd";
import StudentDetail from "./student/StudentDetail";

/**后台页面 */
export default function Admin() {
  return (
    <div>
      {/* 1.后台页面布局 */}
      <Layout
        //   1-1.顶部显示header
        header={<Header />}
        //   1-2.左侧菜单栏显示aside
        aside={<Menu />}
      >
        {/*1-3. 欢迎页面-路由children */}

        <Switch>
          {/* <> */}
          <Route path="/" exact component={Welcome} />
          {/* 1-4.学生列表、添加学生、课程列表、添加课程列表页-路由 */}
          <Route path="/students" exact component={StudentList} />
          <Route path="/students/add" exact component={StudentAdd} />
          {/* 1-5.学生详情页-路由 */}
          <Route path="/students/:sNo" exact component={StudentDetail} />
          <Route path="/courses" exact component={CourseList} />
          <Route path="/courses/add" exact component={CourseAdd} />
          {/* </> */}
        </Switch>
      </Layout>
    </div>
  );
}
