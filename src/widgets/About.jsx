import mainImg from "../app/images/about__img.jpg"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="about">
      <motion.p
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="about__text"
      >
        MANTICORE DESIGNE — это бренд, который мастерски сочетает искусство и магию, создавая уникальные вещи и бижутерию. Каждое изделие переносит вас в мир фантазий и волшебства, где каждая деталь продумана до мелочей.
      </motion.p>
      <motion.img
        initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="main__img"
        src={mainImg}
        alt="main" />
    </section>
  )
}
