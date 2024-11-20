import React, { useState } from 'react';

function CrudApp() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  // Add item using push equivalent
  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  // Filter method for deleting
  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  // Edit item
  const editItem = (index) => {
    setEditIndex(index);
    setEditValue(items[index]);
  };

  const saveEdit = () => {
    const updatedItems = items.map((item, i) =>
      i === editIndex ? editValue : item
    );
    setItems(updatedItems);
    setEditIndex(null);
    setEditValue('');
  };

  return (
    <div>
      <h1>Simple CRUD App</h1>

      {/* Add new item */}
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
      />
      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
              </div>
            ) : (
              <div>
                {item}
                <button onClick={() => editItem(index)}>Edit</button>
                <button onClick={() => deleteItem(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrudApp;
