import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ReduxActionNowrap = (props) => {
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

  if (key === "change") addStyle += " hidden";
  return (
    <div
      className={`h-auto bg-slate-100/50 rounded-md px-1 mt-1 ml-1 text-black ${addStyle} ${
        playAnimate && "animate-green-blink"
      }`}
    >
      <h1>{key}</h1>
      <div className="text-ellipsis overflow-hidden">{JSON.stringify(data)}</div>
    </div>
  );
};
const ReduxAction = React.memo(ReduxActionNowrap);
export default ReduxAction
