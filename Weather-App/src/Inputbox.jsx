import "./Inputbox.css";

const Inputbox = (props) => {
  return (
    <div className="userInput">
      <div className="input-container">
        <input
          type="text"
          className="inputCity"
          onChange={props.getLocation}
          placeholder="Enter location..."
        />

        <div className="d3warpper">
          <div className="cover">
            <button className="button" onClick={props.getWeatherDetails}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inputbox;
