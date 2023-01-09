import IButton from "interfaces/Button";
import styles from "./Button.module.scss";

function Button({ children, type = "button", onClick }: IButton) {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
