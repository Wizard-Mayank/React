
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

export default InputList;