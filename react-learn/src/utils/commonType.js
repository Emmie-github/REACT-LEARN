import PropTypes from "prop-types";

/**公共的类型约束 */
export default {
  children: PropTypes.node, //是一个可以渲染的内容，字符串、数字、React元素
  groupDatas: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ), //多选框、单选框、下拉列表的数据
  chooseDatas: PropTypes.arrayOf(PropTypes.string)
};
