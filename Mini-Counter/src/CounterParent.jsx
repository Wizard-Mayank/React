import Counter from "./Counter.jsx";

// Counter Parent component to make Counter
function CounterParent() {
  return (
    <div>
      <Counter Sno={1} initialValue={5}></Counter>
      <Counter Sno={2} initialValue={3}></Counter>
      <Counter Sno={3} initialValue={15}></Counter>
    </div>
  );
}

export default CounterParent;
