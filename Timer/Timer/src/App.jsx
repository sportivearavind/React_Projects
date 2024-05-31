import { useEffect, useState } from "react";

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds < 59) {
          return prevSeconds + 1;
        } else {
          setMinutes((prevMinutes) => prevMinutes + 1);
          return 0;
        }
      });
    }, 1000); // 1 second delay

    return () => clearTimeout(timer); // Cleanup the timeout
  }, [seconds, minutes]);

  return (
    <div className="App">
      <h1>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h1>
    </div>
  );
}
