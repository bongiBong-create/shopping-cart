import { Link, Outlet } from "react-router-dom";
import "../app/styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="nav">
        <Link className="link" to="/store">store</Link>
        <Link className="link" to="/">main</Link>
      </nav>
      <div className="name">bongiBong-create 2024 c</div>
      <Outlet />
    </footer>
  )
}
