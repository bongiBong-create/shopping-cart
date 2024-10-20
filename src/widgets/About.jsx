import mainImg from "../app/images/about__img.jpg"

export default function About() {
  return (
    <section className="about">
      <p className="about__text">
        MANTICORE DESIGNE — это бренд, который мастерски сочетает искусство и магию, создавая уникальные вещи и бижутерию. Каждое изделие переносит вас в мир фантазий и волшебства, где каждая деталь продумана до мелочей.
      </p>
      <img
        className="main__img"
        src={mainImg}
        alt="main" />
    </section>
  )
}
