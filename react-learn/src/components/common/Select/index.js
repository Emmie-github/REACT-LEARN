import React, { Component } from "react";
import types from "../../../utils/commonType";
import PropTypes from "prop-types";

/**一组下拉列表 */
export default class Select extends Component {
  /**默认属性值 */
  static defaultProps = {
    datas: [],
    value: ""
  };
  /**属性约束 */
  static propTypes = {
    datas: types.groupDatas.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func
  };

  handleChange = e => {
    const val = e.target.value;
    this.props.onChange && this.props.onChange(val, this.props.name, e);
  };
  /**得到一组options */
  getOptions() {
    return this.props.datas.map(it => (
      <option key={it.value} value={it.value}>
        {it.text}
      </option>
    ));
  }

  render() {
    const options = this.getOptions();
    return (
      <select
        name={this.props.value}
        value={this.props.value}
        onChange={this.handleChange}
      >
        {options}
      </select>
    );
  }
}
