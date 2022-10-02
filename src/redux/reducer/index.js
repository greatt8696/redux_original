/**
 * reducer 함수
 *
 * reducer 만드는데 필요한 매개변수는
 *
 * state, action
 *
 * state는 초기화가 필요함.
 *
 *  */

const stateInit = {
  count: 0,
  nextreportId: 1,
  onDetails: false,
  calledAction: { type: "", payload: "" },
  details: {},
  reports: [
    {
      id: 0,
      title: "테스트용 제목뀨1",
      content: "테스트용 내용뀨1",
      writer: "테스트용 작성자뀨1",
      createdAt: "지금ㅁ",
    },
  ],
};

// state의 초기값을 설정해준다.

const reducer = (state = stateInit, action) => {
  // 이곳에 동작할 action들을 작성해준다.

  const { type, payload } = action;
  const { reports } = [...state.reports];

  switch (type) {
    // calledAction은 데이터보려고 만든거니까 무시하세요 .
    case "ADD":
      // ADD
      // 리듀서가 저장소의 값을 변경해주는데 이 반환값을 받아서 바꿔주는 것이기 때문에
      // 저장소는 항상 대기하다가 리듀서가 return 값을 주면 적용을 바로 시켜준다.
      return {
        ...state,
        count: state.count + 1,
        calledAction: { type: "ADD", change: ["count"] },
      };

    case "REMOVE":
      return {
        ...state,
        count: state.count - 1,
        calledAction: { type: "REMOVE", change: ["count"] },
      };

    case "ADD_REPORT":
      const addReport = { ...payload, id: state.nextreportId };
      state.nextreportId++;
      return {
        ...state,
        reports: [...state.reports, addReport],
        calledAction: {
          type: "ADD_REPORT",
          payload,
          change: ["reports", "nextreportId"],
        },
      };

    case "ALL_REMOVE_REPORT":
      state.nextreportId = 0;
      return {
        ...state,
        reports: [],
        calledAction: {
          type: "ALL_REMOVE_REPORT",
          change: ["reports", "nextreportId"],
        },
      };

    case "REMOVE_REPORT":
      return {
        ...state,
        details: {},
        reports: [...state.reports.filter((report) => report.id !== payload)],
        calledAction: { type: "REMOVE_REPORT", payload, change: ["reports"] },
      };
    case "UPDATE_REPORT":
      return {
        ...state,
        reports: state.reports.map((report) => {
          console.log(report, payload, report.id === payload.id);
          return report.id === payload.id
            ? {
                ...report,
                title: payload.title,
                writer: payload.writer,
                content: payload.content,
                createdAt: payload.createdAt,
              }
            : report;
        }),
        calledAction: {
          type: "UPDATE_REPORT",
          payload,
          change: ["reports", "nextreportId"],
        },
      };
    case "ON_DETAILS":
      return {
        ...state,
        onDetails: true,
        calledAction: { type: "ON_DETAILS", change: ["details", "onDetails"] },
      };
    case "OFF_DETAILS":
      return {
        ...state,
        details: {},
        onDetails: false,
        calledAction: { type: "OFF_DETAILS", change: ["details", "onDetails"] },
      };
    case "CHANGE_DETAILS":
      return {
        ...state,
        details: payload,
        calledAction: {
          type: "CHANGE_DETAILS",
          payload,
          change: ["details", "onDetails"],
        },
      };
    default:
      return state;
  }
};

export default reducer;
