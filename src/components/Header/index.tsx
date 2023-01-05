import IHeader from "interfaces/Header";
import styles from "./Header.module.scss";

function Header({title, description, className = "", image}: IHeader) {
  return <header className={`${styles.header} ${className}`}>
    <div className={`${styles["header-texto"]} ${styles.container}`}>
        <h1 className={styles.titulo}>{title}</h1>
        <h2 className={styles.descricao}>{description}</h2>
    </div>
    <div className={styles["header-imagem"]}>
    {image && <img src={image} alt={title} />}
    </div>
  </header>;
}

export default Header;
