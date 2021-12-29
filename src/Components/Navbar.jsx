import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/">Home Page</Link>
      <Link to="/checkout">Checkout Page</Link>
    </div>
  );
}

export default Navbar;
