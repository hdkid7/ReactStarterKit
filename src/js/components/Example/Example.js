import React, { useState } from "react";
import ReactDOM from "react-dom";

const Example = () => {
  const [counter, setState] = useState(0);
  const incrementButtonclick = () => setState(counter + 1);
  const decrementButtonclick = () => setState(positiveOnly(counter - 1));

  const positiveOnly = state => (state < 0 ? 0 : state);

  return (
    <div data-testid="button">
      <p>This is counter app</p>
      <div id="counter-value">{counter}</div>
      <button onClick={incrementButtonclick} id="increment-btn">
        Increment
      </button>
      <button onClick={decrementButtonclick} id="decrement-btn">
        Decrement
      </button>
    </div>
  );
};

export default Example;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Example label="click me" />, wrapper) : false;
