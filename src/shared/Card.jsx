import "../app/styles/card.css";

export default function Card({data}) {
  return (
    <div className="card__item">
      <img src={data.image} alt={data.title} />
      <div className="card__info">
        <div className="card__name">{data.title}</div>
        <div className="card__price">{data.price}$</div>
      </div>
    </div>
  )
}
