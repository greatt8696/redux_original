import React from "react";
import { useDispatch } from "react-redux";

const ReportList = (props) => {
  const { id, writer, title, content, createdAt } = props.report
  const dispatch = useDispatch();

  const handleOnDetail = () => {
    const detailData = { id, writer, title, content, createdAt };
    
    dispatch({ type: "CHANGE_DETAILS", payload: detailData });
    dispatch({ type: "ON_DETAILS", payload: true });
  };
  return (
    <div key={id} className="bg-slate-300 text-black my-1 p-2 rounded-lg cursor-pointer">
      <a onClick={handleOnDetail}>
        <h1> 제목 : {title}</h1>
        <p> 작성자 : {writer}</p>
        <p> 내용 : {content}</p>
        <p> 생성시간 : {createdAt}</p>
      </a>
    </div>
  );
};

export default ReportList;
