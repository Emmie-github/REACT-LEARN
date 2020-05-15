import React, { Component } from "react";
import types from "../../../utils/commonType";
import PropTypes from "prop-types";
import withDataGroup from "../hoc/withDataGroup";

/**选项 */
class Option extends Component {
  /**属性类型约束 */
  static propTypes = {
    info: types.singleData.isRequired //当前单选框的value、text
  };
  render() {
    return (
      <>
        <option value={this.props.info.value}>{this.props.info.text}</option>
      </>
    );
  }
}
const OptGroup = withDataGroup(Option);


/**下拉列表 */
export default class Select extends Component {
  /**属性类型约束 */
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func
  };
  /**渲染*/
  render() {
    return (
      <select
        name={this.name}
        value={this.props.value}
        onChange={e => {
          this.props.onChange && this.props.onChange(e.target.value);
        }}
      >
        <OptGroup {...this.props} />
      </select>
    );
  }
}

