import Button from "../shared/Button";
import { motion } from "framer-motion";

export default function Checkout({ counter }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 1000,
      }}
      animate={{
        opacity: 1,
        x: 0
      }}
      transition={{ duration: 1 }}
      className="checkout">
      <div className="sum">Итого:</div>
      <div className="money">${Math.round(counter)}</div>
      <Button styleBtn="btn__shop" text="Оформить заказ" />
    </motion.div>
  )
}
