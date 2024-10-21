import "../app/styles/header.css"
import cart from "../app/images/cart.svg";
import { Link, Outlet } from "react-router-dom";

export default function Header({score}) {
  return (
    <header className="header">
      <nav className="nav">
        <Link className="link" to="/store">store</Link>
        <Link className="link" to="/">main</Link>
      </nav>
      <div className="logo">
        MD
      </div>
      <Link className="link__pos" to="/cart">
        {score > 0 ? <div className="cart__score">{score}</div> : ""}
        <img src={cart} width={25} alt="logo" />
      </Link>
      <Outlet />
    </header>
  )
}
