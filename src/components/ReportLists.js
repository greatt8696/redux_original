import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReportList from "./ReportList";

const Reports = () => {
  const reports = useSelector((state) => state.reports);
  const dispatch = useDispatch();
  // {
  //   id: 0,
  //   writer: "뀨",
  //   title: "제목뀨",
  //   content: "내용뀨",
  //   createdAt: new Date().toLocaleString(),
  // },

  const allRemoveHandler = () => {
    dispatch({ type: "ALL_REMOVE_REPORT" });
  };
  return (
    <div className="relative bg-slate-500 rounded-2xl p-3 flex flex-col overflow-y-scroll w-auto max-h--[600px] h-[600px]">
      <div className="flex justify-between pl-2">
        <h1 className="sticky">ReportsLists 컴포넌트</h1>
        <div className="group inline">
          <button
            onClick={allRemoveHandler}
            className="transition-all group-hover:bg-transparent group-hover:outline group-hover:outline-2 group-hover:outline-red-500 bg-red-500 p-2 rounded-lg text-white ml-2"
          >
            <svg
              className=" group-hover:stroke-red-600 group-hover:fill-slate-200 stroke-2 fill-transparent stroke-white w-6 h-6"
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
      </div>

      {reports.map((report) => {
        return <ReportList key={report.id} report={report}></ReportList>;
      })}
    </div>
  );
};

export default Reports;
