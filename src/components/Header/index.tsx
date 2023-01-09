import IHeader from "interfaces/Header";
import styles from "./Header.module.scss";

function Header({title, description, className = "", image, children}: IHeader) {
  return <header className={`${styles.header} ${className}`}>
    <div className={`${styles["header-texto"]} ${styles.container}`}>
        <h1 className={styles.titulo}>{title}</h1>
        <h2 className={styles.descricao}>{description}</h2>
        {children}
    </div>
    {image && (<div className={styles["header-imagem"]}>
    <img src={image} alt={title} />
    </div>)}
  </header>;
}

export default Header;
