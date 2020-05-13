import React from "react";
import ThreeLayout from "./components/common/ThreeLayout";

export default function App() {
  return (
    <div>
      <ThreeLayout
        gap={50}
        left={<div style={{ border: "2px solid #008c8c" }}>左边栏</div>}
        right={<div style={{ border: "2px solid #008c8c" }}>右边栏</div>}
      >
        <div
          style={{
            border: "2px solid #f40"
          }}
        >
          <h1>主区域</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            asperiores. Iste obcaecati dicta id aspernatur dolorum unde dolor
            autem inventore numquam possimus officiis quidem, assumenda sequi
            saepe, repudiandae vero facere!
          </p>
        </div>
      </ThreeLayout>
    </div>
  );
}
