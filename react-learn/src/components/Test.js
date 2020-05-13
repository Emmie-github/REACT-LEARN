import React, { Component } from "react";
import Modal from "./common/Modal";


export default class Test extends Component {
  /**使用状态控制蒙层 */
  state = {
    showModal: false
  };
  showModal = () => {
    this.setState({
      showModal: true
    });
  };
  hideModal = () => {
    this.setState({
      showModal: false
    });
  };
  render() {
    return (
      <div>
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589370586035&di=c7b5bd4c5d26d74c7f7301ca97f026bf&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1206%2F24%2Fc1%2F12103973_1340493492546_0_1024x1024it.JPG"
          alt=""
        />
        {this.state.showModal ? (
          <Modal onClose={this.hideModal}>
            <div style={{
              background:"rgb(255,255,0,.5)",
              borderRadius:10
            }}>
              <h1>我是一个蒙层</h1>
              <button onClick={this.hideModal}>关闭蒙层</button>
            </div>
          </Modal>
        ) : null}
        <button onClick={this.showModal}>显示蒙层</button>
      </div>
    );
  }
}
