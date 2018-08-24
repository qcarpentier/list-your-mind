import React from 'react'

const AddItem = props => {
  return (
    <div className="add-item-container">
      <form>
        <input type="text" value={props.item} />
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddItem;