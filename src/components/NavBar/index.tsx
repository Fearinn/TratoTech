import styles from "./Navbar.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import classNames from "classnames";
import { RiShoppingCart2Line, RiShoppingCartFill } from "react-icons/ri";
import Search from "./Search";
import { Link, useLocation, useNavigate } from "react-router-dom";

const iconProps = {
  color: "white",
  size: 24,
};

function NavBar() {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} onClick={() => {navigate("/")}}/>
      <div className={styles.links}>
        <Link
          to="/"
          className={classNames(styles.link, {
            [styles.selected]: location.pathname === "/",
          })}
        >
          Página Inicial
        </Link>
      </div>
      <div className={styles.busca}>
        <Search />
      </div>
      <div className={styles.icones}>
        <Link to="cart">
          {location.pathname === "/cart" ? (
            <RiShoppingCartFill {...iconProps} />
          ) : (
            <RiShoppingCart2Line {...iconProps} />
          )}
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
