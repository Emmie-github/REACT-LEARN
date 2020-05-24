import React from "react";
import "./index.css";

/**学生表格组件 */
export default function StudentTable(props) {
  // 每个学生生成一行tr
  const trs = props.stus.map(s => (
    <tr key={s.id}>
      <td>{s.sNo}</td>
      <td>{s.name}</td>
      <td>{s.sex === 0 ? "男" : "女"}</td>
      <td>{s.birth}</td>
      <td>{s.email}</td>
      <td>
        {/* 跳转到学生详情页 */}
        <a href={`/students/${s.sNo}`}>详情</a>
      </td>
    </tr>
  ));
  return (
    <table className="tab">
      {/* 表头 */}
      <thead>
        <tr>
          <th>学号</th>
          <th>姓名</th>
          <th>性别</th>
          <th>出生年份</th>
          <th>邮箱</th>
          <th>操作</th>
        </tr>
      </thead>
      {/* 表身 */}
      <tbody>{trs}</tbody>
    </table>
  );
}
