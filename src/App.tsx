import React, { useState } from "react";
import { Selector } from "./components";
import "./App.css";

const App: React.FC = () => {
  const [status, setStatus] = useState(false);

  return (
    <div className="App">
      <Selector
        id="selector"
        status={status}
        onClick={() => setStatus(!status)}
        items={["", ""]}
        colorOn="#F0D000"
      />
    </div>
  );
};

export default App;
