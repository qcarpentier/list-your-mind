import React from 'react'

const List = props => {
  const deleteItem = index => {
    props.deleteItem(index);
  };
  
  // Item list with filtering
  const listItems = props.items ? 
    props.items
      .filter(items => items.includes(props.item))
      .map((item, index) => (
        <li key={index}>
          {item}
          <div className="tooltip">
            <span className="close-button" onClick={() => deleteItem(index)}>
              &#10006;
            </span>
            <span className="tooltip-text">Delete</span>
          </div>
        </li>
      )) : 
    null;

  return (
    <div className="list-container">
      {listItems}
    </div>
  )
}

export default List
