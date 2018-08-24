import React, { Component } from 'react';
import Menu from './Menu';
import AddItem from './AddItem';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      item: '',
      items: ''
    }
  }
  
  render() {
    const item = this.state.item;
    const items = this.state.items;

    return (
      <div className="app-container">
        <Menu />
        <AddItem item={item} />
        <List 
          item={item}
          items={items}
        />
      </div>
    );
  }
}

export default App;
