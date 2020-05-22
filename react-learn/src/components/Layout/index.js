import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";

/**后台->页面布局 */
export default class Layout extends Component {
  /**属性类型约束  */
  static propTypes = {
    header: PropTypes.element,
    aside: PropTypes.element,
    children: PropTypes.element
  };
  render() {
    return (
      <div className="container">
        {/* 上部分 */}
        <header className="header">{this.props.header}</header>
        {/* 下主区域 */}
        <div className="middle">
          {/* 左 */}
          <aside className="aside">{this.props.aside}</aside>
          {/* 右 */}
          <div className="main">
              {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
