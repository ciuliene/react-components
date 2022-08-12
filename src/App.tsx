import React, { useState } from "react";
import {
  Selector,
  BubbleLoader,
  BounceLoader,
  RadarLoader,
  Button,
  Checkbox,
  Dropdown,
} from "./components";
import "./App.css";

const App: React.FC = () => {
  const [status, setStatus] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [dropdownSelected, setDropdownSelected] = useState(0);
  const [seasons, setSeasons] = useState([
    { text: "Winter", checked: false },
    { divider: true },
    { text: "Spring", checked: false },
    { text: "Summer", checked: false },
    { text: "Autumn", checked: false },
  ]);

  const onChangeDropdownValue = (value, index) => {
    setDropdownSelected(index);
  };

  return (
    <div className="App" data-testid="test-selector">
      <table border={1}>
        <tbody>
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
          <tr>
            <th>Selector</th>
            <td>
              <Selector
                id="selector"
                status={status}
                onClick={() => setStatus(!status)}
                items={["OFF", "ON"]}
                colorOn="#F0D000"
                disabled={disabled}
              />
            </td>
          </tr>
          <tr>
            <th>Checkbox</th>
            <td>
              <div>
                <Checkbox
                  status={status}
                  onClick={() => setStatus(!status)}
                  text="Checkbox"
                  disabled={disabled}
                />
              </div>
            </td>
          </tr>
          <tr>
            <th>Button</th>
            <td>
              <Button onClick={(e) => setDisabled(!disabled)}>Press</Button>
            </td>
          </tr>
          <tr>
            <th>Dropdown</th>
            <td>
              <div>
                <Dropdown
                  items={[
                    {
                      header: true,
                      text: "Europe",
                    },
                    {
                      text: "Paris",
                    },
                    {
                      disabled: true,
                      text: "London",
                    },
                    {
                      text: "Rome",
                    },
                    {
                      text: "Berlin",
                    },
                    {
                      divider: true,
                    },
                    {
                      header: true,
                      text: "America",
                    },
                    {
                      text: "New York",
                    },
                    {
                      disabled: true,
                      text: "Buenos Aires",
                    },
                    {
                      text: "Toronto",
                    },
                    {
                      text: "Los Angeles",
                    },
                  ]}
                  onSelect={onChangeDropdownValue}
                  selected={dropdownSelected}
                  disabled={disabled}
                />
                <br />
                <Dropdown
                  items={seasons.map((season, i) => {
                    if (season.divider) {
                      return {
                        divider: true,
                      };
                    }
                    return {
                      text: season.text,
                      checkbox: true,
                      status: season.checked,
                      onSelect() {
                        let newSeasons = [...seasons];

                        newSeasons[i].checked = !newSeasons[i].checked;

                        setSeasons(newSeasons);
                      },
                    };
                  })}
                  title={`Seasons (${seasons.reduce((acc, season) => {
                    return acc + (season.checked ? 1 : 0);
                  }, 0)})`}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
