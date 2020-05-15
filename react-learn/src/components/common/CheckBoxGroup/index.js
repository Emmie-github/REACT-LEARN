import React, { Component } from "react";
import types from "../../../utils/commonType";
import PropTypes from "prop-types";
import withDataGroup from "../hoc/withDataGroup";

/**复选框 */
class CheckBox extends Component {
  /**属性类型约束 */
  static propTypes = {
    name: PropTypes.string.isRequired,
    chooseDatas: types.chooseDatas.isRequired,
    onChange: PropTypes.func,
    info: types.singleData.isRequired
  };
  /**事件 */
  handleChange = e => {
    let newArr;
    if (e.target.checked) {
      /**选中 */
      newArr = [...this.props.chooseDatas, e.target.value];
    } else {
      this.props.chooseDatas.filter(it => it !== e.target.value);
    }
    this.props.onChange && this.props.onChange(newArr);
  };
  /**渲染 */
  render() {
    return (
      <label>
        <input
          type="checkbox"
          name={this.props.name}
          value={this.props.info.value}
          checked={this.props.chooseDatas.includes(this.props.info.value)}
          onChange={this.handleChange}
        />
        {this.props.info.text}
      </label>
    );
  }
}

export default withDataGroup(CheckBox);
