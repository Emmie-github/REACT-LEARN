import React from "react";

export default function Student(props) {
  return (
    <li>
      {/* 单个学生 */}
      [姓名:] {props.name}
      [email:] {props.email}
      [性别:] {props.sex === 1 ? "女" : "男"}
      [出生年份:] {props.birth}
    </li>
  );
}
