import React, { useState } from "react";

const Counter = () => {
  const [count, isCount] = useState(0);
  return (
    <>
      <div
        className=""
        style={{ backgroundColor: "thistle", margin: "11%", padding: "5%" }}
      >
        <div className="text-center">
          <h3 className="text-3xl">{count}</h3>
          <button
            className="m-3 btn btn-success"
            onClick={() => {
              isCount(count + 1);
            }}
          >
            Inrement
          </button>
          <button
            className="m-3 btn btn-warning"
            onClick={() => {
              isCount(count > 0 ? count - 1 : 0);
            }}
          >
            Decrement
          </button>
          <button
            className="m-3 btn btn-danger"
            onClick={() => {
              isCount(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
