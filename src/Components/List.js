import React from 'react'

const List = props => {

  // Item list with filtering
  const listItems = props.items ? 
    props.items.map((item, index) => (
      <li key={index}>
        {item}
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
