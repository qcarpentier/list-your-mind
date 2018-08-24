import React from "react";

const Switch = props => {
  const handleCheckChange = () => {
    props.handleCheckChange();
  };

  return (
    <div className="switch-container">
      <span>Enable animation</span>
      <label className="switch">
        <input
          type="checkbox"
          onChange={handleCheckChange}
          checked={props.disableAnimation}
        />
        <span className="slider" />
      </label>
    </div>
  );
};

export default Switch;
