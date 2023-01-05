import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Outlet } from "react-router-dom";
import styles from "./DefaultPage.module.scss";

function DefaultPage() {
  return (
    <>
      <div className={styles.container}>
        <NavBar />
        <div className={styles["container-outlet"]}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DefaultPage;
