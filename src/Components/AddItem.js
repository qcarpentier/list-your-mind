import React from 'react'

const AddItem = props => {
  const handleSubmit = event => {
    props.handleSubmit(event);
  };

  const handleInputChange = event => {
    props.handleInputChange(event);
  };

  return (
    <form className="add-item-container" onSubmit={handleSubmit}>
      <input type="text" value={props.item} onChange={handleInputChange} />
      <button>&#10010;</button>
    </form>
  )
}

export default AddItem;