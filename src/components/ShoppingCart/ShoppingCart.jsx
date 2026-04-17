import { useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 2000 },
  { id: 3, name: "Headphone", price: 1500 },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    const updateCart = cart.filter((item) => item.id !== id);
    setCart(updateCart);
  };

  const totalPrice = cart.reduce((total, item) => total +item.price, 0);
  return (
    <div style={{ padding: "20px" }}>
      <h2>Our Shop</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <h3>Name: {item.name}</h3>
            <p>Price: {item.price}</p>
            <button onClick={() => addToCart(item)}>Add To Cart</button>
          </div>
        ))}
      </div>
      <hr />
      <div>
        <h2>Your Cart {cart.length} Item</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index} style={{ display: "flex", gap: "20px" }}>
              <h4>
                {item.name} - {item.price} Taka
              </h4>
              <button
                style={{ marginLeft: "10px", color: "red", cursor: "pointer" }}
                onClick={() => removeFromCart(item.id)}
              >
                Removed
              </button>
            </li>
          ))}
        </ul>
          <div style={{marginTop: '20px', fontWeight: 'bold', fontSize: '20px'}}>
            Total Price: {totalPrice} Taka.
          </div>
      </div>
    </div>
  );
}
