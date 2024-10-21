import "./styles/global.css";
import Home from "../pages/Home";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "../pages/Store";
import Cart from "../pages/Cart";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    setCartTotal(cart.length)
  }, [cart])

  return (
    <BrowserRouter>
      <Routes>` `
        <Route
          path="/"
          element={<Home score={cartTotal}/>}
        />
        <Route
          path="/store"
          element={<Store score={cartTotal} setCart={setCart} data={products} />}
        />
        <Route
          path="/cart"
          element={<Cart score={cartTotal} setCart={setCart} cart={cart}/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

