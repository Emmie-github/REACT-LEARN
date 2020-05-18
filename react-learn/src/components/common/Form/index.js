import React, { Component } from "react";
import { Provider } from "./formContext";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import PropTypes from "prop-types";

/**Form表单 */
export default class Form extends Component {
  /**通过状态来让Form组件受控 */
  state = {
    formData: {},
    changeFormData: (name, val) => {
      this.setState({
        formData: {
          ...this.state.formData,
          [name]: val
        }
      });
    },
    submit: () => {
      this.props.onSubmit && this.props.onSubmit(this.state.formData);
    }
  };
  /**Button的属性类型约束 */
  static propTypes = {
    onSubmit: PropTypes.func
  };
  render() {
    return (
      <div>
        {/* Provider上下文提供者 */}
        <Provider value={this.state}>{this.props.children}</Provider>
      </div>
    );
  }
}

Form.Input = FormInput;
Form.Button = FormButton;
