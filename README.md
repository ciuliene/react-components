# React Components

This library provides a list of useful components for React projects

## Install

To install the library, run this command:

```sh
npm install @gerrico/react-components
```

## Usage

To import components add this statement to your code:

```Javascript
import {component} from "@gerrico/react-components"
```

## List of components

- [Selector](#selector)

## Selector

A button to toggle between states

### Props

|Name|Description|Type|Required|Default|
|-|-|-|-|-|
|id|Unique id for the component|string|Yes||
|status|The status of the selector (false -> left, true -> right)|boolean|Yes||
|onClick|Action to perform|function|Yes||
|colorOff?|The color of the selector while is **off**|string|No|#444|
|colorOff?|The color of the selector while is **on**|string|No|#444|
|textColor?|The color of the text inside the selector|string|No|#FFF|
|disabled?|If true, the selector is disabled|boolean|No|false|
|className?|Provide other style|string|No|undefined|

### Example

```Javascript
import React, { useState } from "react";
import { Selector } from "@gerrico/react-components";

function App() {
  const [status, setStatus] = useState(false);
  return (
    <div>
      <Selector
        id="selector"
        status={status}
        onClick={() => {
          setStatus(!status);
        }}
        items={["OFF", "ON"]}
        colorOff="#2080B0"
        colorOn="#20B080"
      />
    </div>
  );
}

export default App;
```
