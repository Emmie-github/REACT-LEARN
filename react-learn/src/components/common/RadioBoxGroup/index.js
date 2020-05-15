import React, { Component } from "react";
import types from "../../../utils/commonType";
import PropTypes from "prop-types";
import withDataGroup from "../hoc/withDataGroup"

/**单选框 */
class Radio extends Component {
  /**属性类型约束 */
  static propTypes = {
    name: PropTypes.string.isRequired,
    info: types.singleData.isRequired, //当前单选框的value、text
    value: PropTypes.string.isRequired, //当前选中的value
    onChange: PropTypes.func
  };
  /**渲染 */
  render() {
    return (
      <label>
        <input
          type="radio"
          name={this.props.name}
          value={this.props.info.value}
          checked={this.props.value === this.props.info.value}
          onChange={() => {
            this.props.onChange && this.props.onChange(this.props.info.value);
          }}
        />
        {this.props.info.text}
      </label>
    );
  }
}

export default withDataGroup(Radio);
