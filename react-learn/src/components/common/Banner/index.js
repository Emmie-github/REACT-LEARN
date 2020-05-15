import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";
import ImgContainer from "./ImgContainer";
import SwitchArrow from "./SwitchArrow";
import SwitchDot from "./SwitchDot";

/**整个轮播图 */
export default class Banner extends Component {
  /**默认属性 */
  static defaultProps = {
    width: 520,
    height: 280,
    imgSrcs: [],
    autoDuration: 3000,
    duration: 500
  };
  /**属性类型约束  */
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired,
    autoDuration: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired
  };
  imgContainerRef = el => {
    this.imgContainer = el;
  };
  /**切换到 + 点点事件 */
  handleSwitch = index => {
    /**箭头+点点的新状态 */
    this.setState({
      curIndex: index
    });
    // console.log(this.imgContainer); //图片对象
    this.imgContainer.switchTo(index);
  };
  state = {
    curIndex: 0
  };
  /**箭头事件 */
  handleArrowChange = type => {
    // console.log(type);
    let cur = this.state.curIndex;
    if (type === "left") {
      cur--;
      if (cur < 0) {
        cur = this.props.imgSrcs.length - 1;
      }
    } else {
      cur++;
      if (cur > this.props.imgSrcs.length - 1) {
        cur = 0;
      }
    }
    /**切换 */
    this.handleSwitch(cur);
  };
  timer = null;
  autoSwitch() {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      let cur = this.state.curIndex;
      cur = (cur + 1) % this.props.imgSrcs.length;
      this.handleSwitch(cur);
    }, this.props.autoDuration);
  }
  componentDidMount() {
    this.autoSwitch();
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  /**整个渲染 */
  render() {
    return (
      <div
        className="banner-container"
        style={{
          width: this.props.width,
          height: this.props.height
        }}
        onMouseEnter={() => {
          clearInterval(this.timer);
        }}
        onMouseLeave={() => {
          this.autoSwitch();
        }}
      >
        <ImgContainer
          ref={this.imgContainerRef}
          imgSrcs={this.props.imgSrcs}
          imgWidth={this.props.width}
          imgHeight={this.props.height}
          duration={this.props.duration}
        />
        <SwitchArrow onChange={this.handleArrowChange} />
        <SwitchDot
          total={this.props.imgSrcs.length}
          curIndex={this.state.curIndex}
          onChange={this.handleSwitch}
        />
      </div>
    );
  }
}
