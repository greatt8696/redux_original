import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ReduxStateNowrap = (props) => {
  let addStyle;
  const { key, data } = props.stateData;
  const changeReduxData = useSelector((state) => state.calledAction);
  const [playAnimate, setPlayAnimate] = useState(false);

  useEffect(() => {
    if (changeReduxData.change !== undefined) {
      changeReduxData.change.forEach((changeData) => {
        if (changeData === key) {
          setPlayAnimate(true);
          setTimeout(() => {
            setPlayAnimate(false);
          }, 300);
        }
      });
    }
  }, [changeReduxData]);

  if (key === "reports")
    addStyle += " overflow-y-scroll w-full max-h-24 h-24 text-[9px] mb-1";
  else if (key === "details")
    addStyle += " overflow-y-scroll w-full max-h-24 h-24  mb-1";
  else if (key === "calledAction") addStyle += " hidden";
  return (
    <div
      className={`h-auto bg-slate-100/50 rounded-md px-1 mt-1 ml-1 text-black ${addStyle} ${
        playAnimate && "animate-green-blink"
      }`}
    >
      <h1>{key}</h1>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};
const ReduxState = React.memo(ReduxStateNowrap);
export default ReduxState
