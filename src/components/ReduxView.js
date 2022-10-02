import React from "react";
import { useSelector } from "react-redux";
import ReduxState from "./ReduxState";
import ReduxAction from "./ReduxAction";

const ReduxView = () => {
  const stateDatas = useSelector((state) => state);
  const actionDatas = useSelector((state) => state.calledAction);

  return (
    <div className=" bg-slate-500 rounded-2xl p-3 col-span-2 ">
      <h1>ReduxView 컴포넌트</h1>
      <div className="w-full h-auto grid grid-cols-3 mt-2 gap-5">
        <div className="">
          <p>action</p>
          {Object.keys(actionDatas).map((key) => (
            <ReduxAction
              key={key}
              stateData={{ key: key, data: actionDatas[key] }}
            ></ReduxAction>
          ))}
        </div>
        <div className="col-span-2">
          <p>state</p>
          <div className="bg-slate-300/30 w-auto   mt-2 rounded-xl flex flex-wrap gap-2 ">
            {Object.keys(stateDatas).map((key) => (
              <ReduxState
                key={key}
                stateData={{ key: key, data: stateDatas[key] }}
              ></ReduxState>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReduxView;
