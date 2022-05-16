import logo from "./logo.svg";
import "./App.css";
import { Timer } from "./Timer/Timer";

function App() {
  return (
    <div className="App">
      <Timer time={2 * 60} timerInterval={1000} step={1} num={1} />
      <Timer time={3 * 60} timerInterval={2000} step={2} num={2} />
    </div>
  );
}

export default App;
