import "../app/styles/home.css"
import About from "../widgets/About";
import Footer from "../widgets/Footer";
import Header from "../widgets/Header";

export default function Home({score}) {
  return (
    <>
      <Header score={score}/>
      <About />
      <Footer />
    </>
  )
}
