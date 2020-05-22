import React from "react";
import "./index.css";

/**后台页面头部区 */
export default function Header() {
  return (
    <div className="header-content">
      <div className="left">
        <h1>学生管理系统</h1>
      </div>
      <div className="right">
        <span>用户名</span>
        <button>退出</button>
      </div>
    </div>
  );
}
