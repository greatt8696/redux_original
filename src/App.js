import { useSelector } from "react-redux";
import "./App.css";
import {
  Count,
  CountView,
  Report,
  ReportLists,
  Details,
  ReduxView,
} from "./components";
import "./input.css";

function App() {
  const onDetails = useSelector((state) => state.onDetails);

  return (
    <div className="App flex bg-black justify-center align-middle items-stretch  w-screen h-screen text text-white">
      <div className="relative"></div>
      <div className="fixed max-h-screen grid grid-cols-2 gap-8 top-24 max-w-4xl w-4xl">
        <ReduxView />
        <Count />
        <CountView />
        <Report />
        <ReportLists />
      </div>
      {onDetails && <Details />}
    </div>
  );
}

export default App;
