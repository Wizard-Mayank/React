import React from "react";

const CartList = () => {
  const [tasks, setTasks] = React.useState([]);

  const deleteHandler = () => {
    // alert("Deleted!");

    console.log(tasks); // tasks array
  };

  return (
    <div>
      <h4>-----------LIST-----------</h4>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index} className="taskList">
              <span>{task}</span>
              <button onClick={deleteHandler}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
