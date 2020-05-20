import React from "react";
import "./index.css";

/**
 * 属性:
 * 1. current:当前页
 * 2. total:总页数
 * 3. limit:每页页容量
 * 4. panelNumber：数字页码最多显示多少个
 * 5. onPageChange：当页码改变的事件
 * @param {*} props
 */
export default function Pager(props) {
  const totalPage = getPageNumber(props); /**总页数 */
  if (totalPage === 0) {
    return null;
  }
  const min = getMinNumber(props); /**最小数字 */
  const max = getMaxNumber(min, totalPage, props); /**啊大数字 */
  const numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(
      <span
        key={i}
        className={i === props.current ? "item active" : "item"}
        onClick={() => {
          toPage(i, props);
        }}
      >
        {i}
      </span>
    );
  }
  return (
    <>
      <span
        onClick={() => {
          toPage(1, props);
        }}
        className={props.current === 1 ? "item disabled" : "item"}
      >
        首页
      </span>
      <span
        onClick={() => {
          toPage(props.current - 1 < 1 ? 1 : props.current - 1, props);
        }}
        className={props.current === 1 ? "item disabled" : "item"}
      >
        上一页
      </span>
      {/* 数字页码区 */}
      {numbers}
      <span
        onClick={() => {
          toPage(
            props.current + 1 > totalPage ? totalPage : props.current + 1,
            props
          );
        }}
        className={props.current === totalPage ? "item disabled" : "item"}
      >
        下一页
      </span>
      <span
        onClick={() => {
          toPage(totalPage, props);
        }}
        className={props.current === totalPage ? "item disabled" : "item"}
      >
        尾页
      </span>
      {/* 尾巴显示页码 */}
      <span className="current">{props.current}</span>/<span>{totalPage}</span>
    </>
  );
}

/**计算总页数 */
function getPageNumber(props) {
  return Math.ceil(props.total / props.limit);
}

/** 跳转到指定页码*/
function toPage(target, props) {
  if (props.current === target) {
    return;
  }
  props.onPageChange && props.onPageChange(target);
}

/**计算最小数字 */
function getMinNumber(props) {
  let min = props.current - Math.floor(props.panelNumber / 2);
  if (min < 1) {
    min = 1;
  }
  return min;
}

/**计算最大数字 */
function getMaxNumber(min, totalPage, props) {
  let max = min + props.panelNumber - 1;
  if (max > totalPage) {
    max = totalPage;
  }
  return max;
}