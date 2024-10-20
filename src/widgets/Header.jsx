import "../app/styles/header.css"
import cart from "../app/images/cart.svg";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
      nav
        {/* <ul>
          <li>
            main
          </li>
          <li>
            store
          </li>
        </ul> */}
      </nav>
      <div className="logo">
      MD
      </div>
      <div className="cart">
        <img src={cart} width={25} alt="logo" />
      </div>
    </header>
  )
}
