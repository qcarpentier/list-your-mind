import React, { Component } from 'react';
import Menu from './Menu';
import AddItem from './AddItem';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      item: '',
      items: []
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

  deleteItem = index => {
    this.setState({
      item: "",
      items: this.state.items.filter((el, i) => i !== index)
    });
  };
  
  render() {
    const item = this.state.item;
    const items = this.state.items;

    return (
      <div className="app-container">
        <Menu />
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
