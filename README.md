# React Components

This library provides a list of useful components for React projects

## Install

To install the library, run this command:

```sh
npm install @gerrico/react-components
```

## List of components

- [Selector](#selector)
- [BubbleLoader](#bubbleloader)
- [BounceLoader](#bounceloader)
- [RadarLoader](#radarloader)

## Selector

A button to toggle between states.

![Alt Text](./images/selector.gif)

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

const App: React.FC = () => {
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

## BubbleLoader

A loader with twelve bubbles that increase and decrease their size.

![Alt Text](./images/bubbleLoader.gif)
### Props

|Name|Description|Type|Required|Default|
|-|-|-|-|-|
|left?|Set the distance from the left margin|string|No|50%|
|top?|Set the distance from the top margin|string|No|50%|
|bubbleSize?|Set the size of the bubbles (the size of the component doesn't change)|number|No|1|
|color?|The color of the bubbles|string|No|#DDD|
|className?|Provide other style|string|No|undefined|

### Example

```Javascript
import React from "react";
import { BubbleLoader } from "./components";

const App: React.FC = () => {
  return (
    <div>
      <BubbleLoader left="50vw" top="50vh" color="#20E080" />
    </div>
  );
};

export default App;
```

## BounceLoader

A loader with three bouncing balls.

![Alt Text](./images/bounceLoader.gif)

### Props

|Name|Description|Type|Required|Default|
|-|-|-|-|-|
|left?|Set the distance from the left margin|string|No|50%|
|top?|Set the distance from the top margin|string|No|50%|
|size?|A multiplying factor for balls size|number|No|1|
|color?|The color of the balls|string|No|#DDD|
|className?|Provide other style|string|No|undefined|

### Example

```Javascript
import React from "react";
import { BounceLoader } from "./components";

const App: React.FC = () => {
  return (
    <div>
      <BounceLoader left="50vw" top="50vh" color="#2080E0" size={0.8}/>
    </div>
  );
};

export default App;
```

## RadarLoader

A loader that simulates a radar signal

![Alt Text](./images/radarLoader.gif)

### Props

|Name|Description|Type|Required|Default|
|-|-|-|-|-|
|left?|Set the distance from the left margin|string|No|50%|
|top?|Set the distance from the top margin|string|No|50%|
|size?|A multiplying factor for radar size|number|No|1|
|color?|The color of the radar|string|No|#be97e8|
|fill?|Only border (if false) or entire circle (if true)|boolean|No|false|
|className?|Provide other style|string|No|undefined|

### Example

```Javascript
import React from "react";
import { RadarLoader } from "./components";

const App: React.FC = () => {
  return (
    <div>
      <RadarLoader left="50vw" top="62vh" size={1} fill={false} />
    </div>
  );
};

export default App;
```
