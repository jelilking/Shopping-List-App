import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Shopping List</h1>
      <ShoppingList />
    </div>
  );
}

function ShoppingList() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  function addList(e) {
    e.preventDefault();
    setList([...list, input]);
    setInput("");
  }

  function handleDelete(ind) {
    const filteredList = list.filter((item, index) => index !== ind);
    setList(filteredList);
  }

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  return (
    <div className="wrapper">
      <div className="inputBx">
        <form onSubmit={addList}>
          <input type="text" value={input} onChange={handleInputChange} />
          <button className="add-btn">Add</button>
        </form>
      </div>
      <ul className="list-items">
        {list.map((item, ind) => {
          return (
            <Item key={ind} ind={ind} item={item} handleDelete={handleDelete} />
          );
        })}
      </ul>
    </div>
  );
}

const Item = ({ ind, item, handleDelete }) => {
  return (
    <div>
      <li className="list-item"> {item} </li>
      <button
        type="button"
        onClick={() => {
          handleDelete(ind);
        }}
        className="delete-btn"
      >
        X
      </button>
    </div>
  );
};
