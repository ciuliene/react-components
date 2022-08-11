import React, { useState } from "react";
import {
  Selector,
  BubbleLoader,
  BounceLoader,
  RadarLoader,
  Button,
} from "./components";
import "./App.css";

const App: React.FC = () => {
  const [status, setStatus] = useState(false);

  return (
    <div className="App" data-testid="test-selector">
      <table border={1}>
        <tbody>
          <tr>
            <th>Selector</th>
            <td>
              <Selector
                id="selector"
                status={status}
                onClick={() => setStatus(!status)}
                items={["OFF", "ON"]}
                colorOn="#F0D000"
              />
            </td>
          </tr>

          <tr>
            <th>Button</th>
            <td>
              <Button onClick={(e) => console.log(e)} disabled={status}>
                Press
              </Button>
            </td>
          </tr>
          <tr>
            <th>BubbleLoader</th>
            <td>
              <div>
                <BubbleLoader color="#20E080" />
              </div>
            </td>
          </tr>
          <tr>
            <th>BounceLoader</th>
            <td>
              <div>
                <BounceLoader color="#2080E0" size={1.5} />
              </div>
            </td>
          </tr>
          <tr>
            <th>RadarLoader</th>
            <td>
              <div>
                <RadarLoader fill={false} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
