import React from "react";
import "./ShoppingCart.css";
import "./reset.css";
import InputList from "./InputList";
import CartList from "./CartList";

const ShoppingCart = () => {
  const [content, setContent] = React.useState("");
  const [tasks, setTasks] = React.useState([]);

  const addTask = () => {
    if (content.trim() === "") return; // ignore empty
    setTasks([...tasks, content]); // add new item
    setContent(""); // clear input
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="cartBox">
      <InputList content={content} setContent={setContent} addTask={addTask} />
      <CartList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default ShoppingCart;
