import React from "react";
import "./index.css";
import types from "../../../utils/commonType";
import PropTypes from "prop-types";

/**默认属性 */
Modal.defaultProps = {
  bg: `rgb(0,0,0,.5)`
};
/**属性约束 */
Modal.propTypes = {
  children: types.children,
  bg: PropTypes.string,
  onClose: PropTypes.func
};
/**蒙层 */
export default function Modal(props) {
  return (
    <div
      onClick={e => {
        if (e.target.className === "modal") {
          props.onClose();
        }
      }}
      className="modal"
      style={{
        background: props.bg
      }}
    >
      <div className="modal-center">{props.children}</div>
    </div>
  );
}
