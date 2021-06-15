import './App.css';

const data = {
  products: [
    {
      name: 'Samsung Galaxy S11',
      price: '$1100',
    },
    {
      name: 'Iphone XR',
      price: '$950',
    },
    {
      name: 'Iphone XS',
      price: '$800',
    }
  ]
}

const App = () => {
  return (
    <div className="App">
      <div className="container card">
        {data.products.map((product) => (
          <div className="card">
            <div className="name"><b>Product:</b> {product.name}</div>
            <div className="price"><b>Price:</b> {product.price}</div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default App;
