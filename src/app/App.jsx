import "./styles/global.css";
import Home from "../pages/Home";
import { useEffect, useState } from "react";
import Store from "../pages/Store";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log(2)
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Home />
      <Store data={products}/>
    </>
  )
}

