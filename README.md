# Shopping List App

This is a simple React application that allows users to create and manage a shopping list. Users can add items to the list, view the list of items, and delete items from the list.

## Features

- Add items to the shopping list.
- View the list of added items.
- Delete items from the shopping list.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/shopping-list-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd shopping-list-app
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Components

### App Component

The main component that renders the `ShoppingList` component.

```jsx
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Shopping List</h1>
      <ShoppingList />
    </div>
  );
}
```

### ShoppingList Component

This component handles the state and logic for adding and deleting items from the shopping list.

```jsx
import { useState } from "react";

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
```

### Item Component

This component renders an individual item in the shopping list along with a delete button.

```jsx
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
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
