import React, { Component } from "react";

/**学生查询组件 */
export default class StudentSearchBar extends Component {
  constructor(props) {
    super(props);
    const def = {
      key: "",
      sex: -1
    };
    this.state = Object.assign({}, def, this.props.defaultValue);
  }
  /**受控组件的事件 */
  handleRadioChange = e => {
    this.setState({
      sex: +e.target.value
    });
  };
  /**button点击事件 */
  handleSearch = () => {
    if (this.props.onSearch) {
      this.props.onSearch(this.state);
    }
  };
  render() {
    return (
      <div>
        关键字:
        <input
          type="text"
          value={this.state.key}
          onChange={e => this.setState({ key: e.target.value })}
        />
        性别:
        <label>
          <input
            type="radio"
            checked={this.state.sex === -1}
            name="sex"
            value={-1}
            onChange={this.handleRadioChange}
          />
          不限
        </label>
        <label>
          <input
            type="radio"
            checked={this.state.sex === 0}
            name="sex"
            value={0}
            onChange={this.handleRadioChange}
          />
          男
        </label>
        <label>
          <input
            type="radio"
            checked={this.state.sex === 1}
            name="sex"
            value={1}
            onChange={this.handleRadioChange}
          />
          女
        </label>
        <button onClick={this.handleSearch}>查询</button>
      </div>
    );
  }
}
