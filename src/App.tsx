import { useState } from "react";
import reactLogo from "./assets/react.svg";
import myLogo from "/logo.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://selycton.com" target="_blank">
          <img src={myLogo} className="logo" alt="logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Selyc + Telegram</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          <code>development in progress, come back later</code>
        </p>
      </div>
      <p className="read-the-docs">Click on the Selyc logos to learn more</p>
    </>
  );
}

export default App;
