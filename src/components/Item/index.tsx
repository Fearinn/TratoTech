import styles from "./Item.module.scss";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { changeFavorite } from "store/reducers/items";
import { useTypedDispatch, useTypedSelector } from "hooks";
import { changeCart, changeQuantity } from "store/reducers/cart";
import classNames from "classnames";
import IItem from "interfaces/Item";
const iconProps = {
  size: 24,
  color: "#041833",
};

const quantityProps = {
  size: 32,
  color: "1875E8",
};

function Item({
  title,
  photo,
  price,
  description,
  favorite,
  id,
  cart = false,
  quantity = 0,
}: IItem) {
  const dispatch = useTypedDispatch();

  const isInCart = useTypedSelector((state) =>
    state.cart.some((item) => item.id === id)
  );

  function handleFavorite() {
    dispatch(changeFavorite(id));
  }

  function handleCart() {
    dispatch(changeCart(id));
  }

  return (
    <div
      className={classNames(styles.item, {
        [styles.itemNoCarrinho]: cart,
      })}
    >
      <div className={styles["item-imagem"]}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles["item-descricao"]}>
        <div className={styles["item-titulo"]}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles["item-info"]}>
          <div className={styles["item-preco"]}>R$ {price.toFixed(2)}</div>
          <div className={styles["item-acoes"]}>
            {favorite ? (
              <AiFillHeart
                {...iconProps}
                color="#ff0000"
                className={styles["item-acao"]}
                onClick={handleFavorite}
              />
            ) : (
              <AiOutlineHeart
                {...iconProps}
                className={styles["item-acao"]}
                onClick={handleFavorite}
              />
            )}
            {cart ? (
              <div className={styles.quantidade}>
                Quantidade:
                <AiFillMinusCircle
                  {...quantityProps}
                  onClick={() => {
                    if (quantity === 1) {
                      dispatch(handleCart);
                    }
                    dispatch(changeQuantity({ id: id, quantity: -1 }));
                  }}
                />
                {String(quantity || 0).padStart(2, "0")}
                <AiFillPlusCircle
                  {...quantityProps}
                  onClick={() =>
                    dispatch(changeQuantity({ id: id, quantity: 1 }))
                  }
                />
              </div>
            ) : (
              <FaCartPlus
                {...iconProps}
                color={isInCart ? "#1875E8" : iconProps.color}
                className={styles["item-acao"]}
                onClick={handleCart}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
