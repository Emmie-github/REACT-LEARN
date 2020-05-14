import React, { Component } from "react";
import types from "../../../utils/commonType";
import PropTypes from "prop-types";

/**一组单选框 */
export default class RadioBoxGroup extends Component {
  /**默认属性值 */
  static defaultProps = {
    datas: [],
    value: ""
  };
  /**属性约束 */
  static propTypes = {
    datas: types.groupDatas.isRequired,
    name: PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    onChange: PropTypes.func
  };
  handleChange = e => {
    const val = e.target.value;
    this.props.onChange && this.props.onChange(val, this.props.name, e);
  };
  /**得到一组单选框 */
  getRadios() {
    return this.props.datas.map(it => (
      <label key={it.value}>
        <input
          type="radio"
          name={this.props.name}
          value={it.value}
          checked={this.props.value === it.value}
          onChange={this.handleChange}
        />
        {it.text}
      </label>
    ));
  }

  render() {
    const bs = this.getRadios();
    return <div>{bs}</div>;
  }
}
