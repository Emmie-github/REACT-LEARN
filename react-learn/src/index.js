import React from "react";
import ReactDOM from "react-dom";
import StudentList from "./components/StudentList";

const appkey = "demo13_1545210570249";
async function fetchAllStudent() {
  const stus = await fetch(
    "http://api.duyiedu.com/api/student/findAll?appkey=" + appkey
  )
    .then(resp => resp.json())
    .then(resp => resp.data);
  // console.log(stus);
  return stus;
}
async function render() {
  ReactDOM.render(
    <React.StrictMode>正在加载中......</React.StrictMode>,
    document.getElementById("root")
  );
  const stus = await fetchAllStudent();
  ReactDOM.render(
    <React.StrictMode>
      <StudentList stus={stus} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}
render();

// const s = {
//   address: "黑龙江省哈尔滨市XXXX",
//   appkey: "demo13_1545210570249",
//   birth: 1987,
//   ctime: 1554135190,
//   email: "382246268@qq.com",
//   id: 5100,
//   name: "张某某22",
//   phone: "18846411586",
//   sNo: "11073",
//   sex: 0,
//   utime: 1588852848
// };

