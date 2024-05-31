import { useEffect, useState } from "react";

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (seconds >= 0 && seconds <= 60) {
        setSeconds(seconds++);
      } else {
        setMinutes(minutes++);
        setSeconds(0);
      }

      if (minutes > 59) {
        setSeconds(0);
        setMinutes(0);
      }
    }, 1000);
  }, [seconds]);

  return (
    <div className="App">
      <h1>
        {seconds}:{minutes}
      </h1>
    </div>
  );
}
