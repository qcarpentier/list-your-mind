import React, { Component } from 'react';
import Menu from './Menu';
import AddItem from './AddItem';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      item: '',
      items: [],
      disableAnimation: ''
    }
  }

  handleInputChange = event => {
    this.setState({ item: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.item) {
      this.setState(prevState => {
        return {
          item: "",
          items: prevState.items.concat(prevState.item)
        };
      });
    }
  };

  handleCheckChange = () => {
    this.setState({
      disableAnimation: !this.state.disableAnimation
    });
  };

  deleteItem = index => {
    this.setState({
      item: "",
      items: this.state.items.filter((el, i) => i !== index)
    });
  };
  
  render() {
    const item = this.state.item;
    const items = this.state.items;
    const disableAnimation = this.state.disableAnimation;

    return (
      <div className="app-container">
        <Menu
          disableAnimation={disableAnimation}
          handleCheckChange={this.handleCheckChange}
        />
        <AddItem 
          item={item}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
        />
        <List 
          item={item}
          items={items}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
