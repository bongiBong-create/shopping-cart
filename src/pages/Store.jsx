import "../app/styles/store.css";
import Card from "../shared/Card";
import Footer from "../widgets/Footer";
import Header from "../widgets/Header";

export default function Store({ data, setCart, score }) {
  return (
    <>
      <Header score={score}/>
    <section className="store">
      <div className="cards">
        {data ? data.map((item, i) => {
          return <Card key={i} name={data.title} data={item} setCart={setCart} />
        }) : "Loading..."}
      </div>
    </section>
    <Footer />
    </>
  )
}
