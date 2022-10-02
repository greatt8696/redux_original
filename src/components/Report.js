import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Report = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });
  const submitHandler = () => {
    dispatch({ type: "ADD_REPORT", payload: inputs });
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    let writer = [];
    for (let idx = 0; idx < parseInt(Math.random() * 15); idx++)
      writer.push("뀨");

    setInputs({
      ...inputs,
      [name]: value,
      writer: writer.join(""),
      createdAt: new Date().toLocaleString(),
    });
  };

  return (
    <div className=" bg-slate-500 rounded-2xl p-3 flex flex-col">
      <h1>Report 컴포넌트</h1>
      <p className="my-2"> </p>
      <h2 className="text-left p-2 ">제목</h2>
      <input
        name="title"
        onChange={inputHandler}
        className="text-black p-2 rounded-lg"
      ></input>
      <p className="my-2"> </p>
      <h2 className="text-left p-2 ">내용</h2>
      <input
        name="content"
        onChange={inputHandler}
        className="text-black p-2 rounded-lg"
      ></input>
      <p className="my-2"> </p>
      <button
        onClick={submitHandler}
        className="p-2 bg-green-800 rounded-lg transition-all font-bold hover:bg-transparent hover:outline-3 hover:outline-green-700 hover:outline hover:shadow-xl"
      >
        글 작성
      </button>
    </div>
  );
};

export default Report;
