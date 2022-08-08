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
- [BounceLoder](#bounceloader)

## Selector

A button to toggle between states.

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

### Props

|Name|Description|Type|Required|Default|
|-|-|-|-|-|
|left?|Set the distance from the left margin|any|No|50vw|
|top?|Set the distance from the top margin|any|No|50vh|
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

### Props

|Name|Description|Type|Required|Default|
|-|-|-|-|-|
|left?|Set the distance from the left margin|any|No|50vw|
|top?|Set the distance from the top margin|any|No|50vh|
|color?|The color of the balls|string|No|#DDD|
|size|A moltiplicator for balls size|number|No|1|
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
