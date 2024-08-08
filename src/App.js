import React from 'react';
import './App.css';

const products = [
  { title: "Potato", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
  { title: "Banana", isFruit: true, id: 4 },
  { title: "Carrot", isFruit: false, id: 5 },
];

const App = () => {
  const handleClick = (product) => {
    alert(`Product clicked: ${product.title}`);
  };

  return (
    <div className="App">
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <span>{product.title}</span>
            <button onClick={() => handleClick(product)}>Link to ID</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
