import React from "react";

// Counter component to create a counter component
function Counter(props) {
  const [value, setValue] = React.useState(props.initialValue);

  // function to increment value
  const incrementHandler = () => {
    if (value >= 10) {
      alert("Value can't be greater than 10");
      return;
    }
    setValue(value + 1);
  };

  // function to decrement value
  const decrementHandler = () => {
    if (value <= 0) {
      alert("Value can't be less than 0");
      return;
    }
    setValue(value - 1);
  };

  return (
    <div>
      <div>Hello, I am Counter no. {props.Sno}</div>
      <div>{value}</div>
      <button onClick={incrementHandler}>+ Plus</button>
      <button onClick={decrementHandler}>- Minus</button>
    </div>
  );
}

export default Counter;
