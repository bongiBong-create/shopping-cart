import "../app/styles/card.css";
import Button from "./Button";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

export default function Card({ data, setCart }) {

  const handleCart = (e) => {
    setCart((cart) => [...cart, data])
  }

  return (
    <Tilt>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          rotate: [180, 0],
        }}
        transition={{ duration: 1 }}
        className="card__item">
        <img src={data.image} alt={data.title} />
        <div className="card__info">
          <div className="card__name">{data.title}</div>
          <div className="card__price">{data.price}$</div>
          <Button onclick={handleCart} styleBtn="add__btn" text="add to cart" />
        </div>
      </motion.div>
    </Tilt>
  )
}
