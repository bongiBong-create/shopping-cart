import "../app/styles/cart.css";

import Footer from "../widgets/Footer";
import Header from "../widgets/Header";
import CartItem from "../shared/CartItem";
import Checkout from "../widgets/Checkout";
import { motion } from "framer-motion";

import { useEffect, useState } from "react";

export default function Cart({ cart, setCart, score }) {

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, a) => acc + a.price, 0))
  }, [cart])

  return (
    <>
      <Header score={score} />
      <section className="cart">
        <motion.div
          initial={{
            opacity: 0,
            x: -1000,
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{ duration: 1 }}
          className="cart__container">
          <h1>Items</h1>
          {cart ? cart.map((item, i) => {
            return <CartItem cart={cart} setCart={setCart} key={i} item={item} />
          }) : "empty"}
        </motion.div>
        <Checkout counter={total} />
      </section>
      <Footer />
    </>
  )
}
