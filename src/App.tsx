import React, { useState } from "react";
import {
  Selector,
  BubbleLoader,
  BounceLoader,
  RadarLoader,
} from "./components";
import "./App.css";

const App: React.FC = () => {
  const [status, setStatus] = useState(false);

  return (
    <div className="App" data-testid="test-selector">
      <Selector
        id="selector"
        status={status}
        onClick={() => setStatus(!status)}
        items={["ON", "OFF"]}
        colorOn="#F0D000"
      />
      <BubbleLoader left="50vw" top="20vh" color="#20E080" bubbleSize={1} />
      <BounceLoader left="50vw" top="38vh" color="#2080E0" size={1.5} />
      <RadarLoader left="50vw" top="62vh" size={1} fill={false} />
    </div>
  );
};

export default App;
