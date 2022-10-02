import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Details = () => {
  const { id, title, writer, content, createdAt } = useSelector(
    (state) => state.details
  );
  const [inputs, setInputs] = useState({
    id,
    title,
    writer,
    content,
    createdAt,
  });
  console.log(inputs);

  const dispatch = useDispatch();

  const handlerExit = () => {
    dispatch({ type: "OFF_DETAILS" });
  };
  const handlerDel = () => {
    dispatch({ type: "OFF_DETAILS" });
    dispatch({ type: "REMOVE_REPORT", payload: id });
  };

  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submitHandler = () => {
    dispatch({ type: "UPDATE_REPORT", payload: inputs });
    dispatch({ type: "OFF_DETAILS"});
  };

  return (
    <div className="z-20 w-screen">
      <div
        className="absolute w-screen h-screen bg-black/20 backdrop-blur-[1px]"
        onClick={handlerExit}
      ></div>
      <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 py-5">
        <div className="flex flex-col p-5 items-stretch absolute bg-slate-200/80 backdrop-blur-md w-full h-full scale-100 py-5 text-black rounded-xl animate-wiggle-third">
          <div className="place-self-end">
            <div className="group inline">
              <button
                onClick={handlerDel}
                className="transition-all group-hover:bg-transparent group-hover:outline group-hover:outline-2 group-hover:outline-orange-500 bg-orange-500 p-2 rounded-lg text-white ml-2"
              >
                <svg
                  className=" group-hover:stroke-orange-600 group-hover:fill-slate-200 stroke-2 fill-transparent stroke-white w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              </button>
            </div>
            <div className="group inline">
              <button
                onClick={handlerExit}
                className="transition-all group-hover:bg-transparent group-hover:outline group-hover:outline-2 group-hover:outline-red-500 bg-red-500 p-2 rounded-lg text-white ml-2"
              >
                <svg
                  className=" group-hover:stroke-red-600 group-hover:fill-slate-200 stroke-2 fill-transparent stroke-white w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <h1>제목 : (id:{id || ""})</h1>
          <input
            type="text"
            className="focus:outline-none focus:bg-white focus:border-purple-500 p-1"
            onChange={inputsHandler}
            name="title"
            value={inputs.title}
          ></input>
          <p> 작성자 : </p>
          <input
            type="text"
            className="focus:outline-none focus:bg-white focus:border-purple-500 p-1"
            onChange={inputsHandler}
            name="writer"
            value={inputs.writer}
          ></input>
          <p> 내용 : </p>
          <input
            type="text"
            className="focus:outline-none focus:bg-white focus:border-purple-500 p-1"
            onChange={inputsHandler}
            name="content"
            value={inputs.content}
          ></input>
          <p> 생성시간 : </p>
          <input
            type="text"
            className="focus:outline-none focus:bg-white focus:border-purple-500 p-1"
            onChange={inputsHandler}
            name="createdAt"
            value={inputs.createdAt}
          ></input>
          <button
            onClick={submitHandler}
            className="flex text-white p-2 mt-5 bg-green-500 rounded-lg transition-all font-bold hover:bg-transparent hover:outline-3 hover:outline-green-700 hover:outline hover:shadow-xl"
          >
            <svg
              className=" group-hover:stroke-green-600 group-hover:fill-slate-200 stroke-2 fill-transparent stroke-white w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
            <span className="mx-auto font-bold">다시쓰끼</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
