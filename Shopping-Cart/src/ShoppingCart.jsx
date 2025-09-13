import React from "react";
import "./ShoppingCart.css";
import "./reset.css";

const InputList = ({ content, setContent, addTask }) => {
  const handleChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <h3 id="cartHeading">Shopping Cart</h3>
      <input
        className="inputField"
        type="text"
        placeholder="Enter new item..."
        value={content}
        onChange={handleChange}
      />
      <button className="btn" onClick={addTask}>
        ➕
      </button>
    </div>
  );
};

const CartList = ({ tasks, deleteTask }) => {
  return (
    <div className="cartList">
      <h4 id="listHeading">ITEMS</h4>
      <ol id="listContent">
        {tasks.map((task, index) => (
          <li key={index} className="taskList">
            <span id="task">{task}</span>
            <button className="btn" onClick={() => deleteTask(index)}>
              ❌
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

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
