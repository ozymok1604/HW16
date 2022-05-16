import React, { Component, useEffect, useReducer } from "react";
import "./Timer.css";
import { useState } from "react";
const addZero = (time) => {
  return time.toString().padStart(2, "0");
};
function Timer2() {
  const [timeLeft, setTimeLeft] = useState(3 * 60);
  const [isCounting, setIsCounting] = useState(false);
  const [progress, setProgress] = useState(100);
  const minutes = addZero(Math.floor(timeLeft / 60));
  const seconds = addZero(timeLeft - minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting &&
        setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 2 : 0));
      isCounting &&
        setProgress((progress) =>
          progress >= 1 ? progress - (100 / timeLeft) * 2 : 0
        );
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [isCounting]);

  const handleStart = () => {
    setIsCounting(true);
  };
  const handleStop = () => {
    setIsCounting(false);
  };

  return (
    <div class="timer">
      <div class="time">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div class="buttons">
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
      <div className="progress-loader" style={{ width: `${progress}%` }}>
        ' '
      </div>
    </div>
  );
}
export { Timer2 };
