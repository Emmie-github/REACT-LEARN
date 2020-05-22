import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { Route } from "react-router-dom";
import Welcome from "./Welcome";
import StudentList from "./student/StudentList";
import StudentAdd from "./student/StudentAdd";
import CourseList from "./course/CourseList";
import CourseAdd from "./course/CourseAdd";

/**后台页面 */
export default function Admin() {
  return (
    <div>
      {/* 1.后台页面布局 */}
      <Layout
        //   1-1.顶部显示
        header={<Header />}
        //   1-2.左侧菜单栏显示
        aside={<Menu />}
      >
        {/*1-3. 欢迎页面-路由 */}
        <Route path="/" exact component={Welcome} />
        {/* 1-4.学生列表、添加学生、课程列表、添加课程列表页-路由 */}
        <Route path="/students" exact component={StudentList} />
        <Route path="/students/add" exact component={StudentAdd} />
        <Route path="/courses" exact component={CourseList} />
        <Route path="/courses/add" exact component={CourseAdd} />
      </Layout>
    </div>
  );
}
