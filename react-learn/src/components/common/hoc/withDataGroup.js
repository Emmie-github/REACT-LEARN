import React from "react";
import types from "../../../utils/commonType";

export default function withDataGroup(Comp) {
  return class DataGroupWrapper extends React.Component {
    static defaultProps = {
      datas: []
    };
    /**属性类型约束 */
    static propTypes = {
      datas: types.groupDatas
    };

    render() {
      const comps = this.props.datas.map(it => (
        <Comp key={it.value} info={it} {...this.props} />
      ));
      return <>{comps}</>;
    }
  };
}
