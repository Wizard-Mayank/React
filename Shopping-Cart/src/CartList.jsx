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

export default CartList;