import React from "react";
import { useSelector } from "react-redux";

const CountView = () => {
  const count2 = useSelector((state) => state.count);
  return (
    <div className=" bg-slate-500 rounded-2xl p-3 ">
      <h1 className="">CountView 컴포넌트</h1>
      <p className="text-8xl p">{count2}</p>
    </div>
  );
};

export default CountView;
