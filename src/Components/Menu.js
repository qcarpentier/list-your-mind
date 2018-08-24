import React, { Component } from 'react';
import Switch from "./Switch";

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true
    };
  }

  handleClick = () => {
    this.setState({
      hidden: !this.state.hidden
    });
  };

  handleCheckChange = () => {
    this.props.handleCheckChange();
  };

  render() {
    return (
      <div className="menu-container">
        <button onClick={this.handleClick}>{"\u2630"}</button>
        <div className="modal-container" hidden={this.state.hidden}>
          <div className="modal-content">
            <span className="close" onClick={this.handleClick}>
              &times;
            </span>
            <Switch
              disableAnimation={this.props.disableAnimation}
              handleCheckChange={this.handleCheckChange}
            />
          </div>
        </div>
      </div>
    )
  }
}
