import "../app/styles/store.css";
import Card from "../shared/Card";
import Footer from "../widgets/Footer";
import Header from "../widgets/Header";

export default function Store({ data }) {
  return (
    <>
      <Header />
    <section className="store">
      <div className="cards">
        {data ? data.map((item, i) => {
          return <Card key={i} name={data.title} data={item} />
        }) : "Loading..."}
      </div>
    </section>
    <Footer />
    </>
  )
}
