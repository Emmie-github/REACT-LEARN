import React, { Component } from "react";
import PropTypes from "prop-types";

/**图片区域 */
export default class ImgContainer extends Component {
  /**属性类型约束 */
  static propTypes = {
    imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired,
    imgWidth: PropTypes.number.isRequired,
    imgHeight: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired
  };
  containerRef = el => {
    this.div = el;
  };
  /**计时器的间隔时间*/
  tick = 16;
  timer = null;
  /**切换图片 */
  switchTo(index) {
    /**设置正确的index */
    if (index < 0) {
      index = 0;
    } else if (index > this.props.imgSrcs.length - 1) {
      index = this.props.imgSrcs.length - 1;
    }
    // console.log(this.div, index);
    /**1.根据index计算最终的marginLeft */
    const targetLeft = -index * this.props.imgWidth;
    /**2.得到当前的marginLeft */
    let curLeft = parseFloat(getComputedStyle(this.div).marginLeft);
    // console.log(curLeft, targetLeft);
    /**3.计算运动的次数 */
    const times = Math.ceil(this.props.duration / this.tick);
    let curTimes = 0; /**当前运动的次数 */
    /**4.计算每次运动的距离 */
    const totalDis = targetLeft - curLeft; /**总距离 */
    const dis = totalDis / times; /**每次运动的距离 */
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      curTimes++;
      curLeft += dis;
      this.div.style.marginLeft = curLeft + "px";
      //   console.log(curTimes);
      if (curTimes === times) {
        this.div.style.marginLeft = targetLeft + "px";
        clearInterval(this.timer);
      }
    }, this.tick);
  }

  render() {
    const imgs = this.props.imgSrcs.map((src, i) => (
      <img
        src={src}
        key={i}
        alt=""
        style={{
          width: this.props.imgWidth,
          height: this.props.imgHeight,
          float: "left"
        }}
      />
    ));
    return (
      <div
        ref={this.containerRef}
        style={{
          width: this.props.imgSrcs.length * this.props.imgWidth,
          height: this.props.imgHeight
        }}
      >
        {imgs}
      </div>
    );
  }
}
