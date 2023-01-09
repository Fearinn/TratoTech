import Button from "components/Button";
import Header from "components/Header";
import Item from "components/Item";
import { useTypedDispatch, useTypedSelector } from "hooks";
import IItem from "interfaces/Item";
import { resetCart } from "store/reducers/cart";
import styles from "./Cart.module.scss";

function Cart() {
  const dispatch = useTypedDispatch();

  const cart = useTypedSelector((state) => {
    const search = new RegExp(state.search, "i");
    let total = 0;

    const typedArray: IItem[] = [];
    const cartReduce = state.cart.reduce((itens, itemInCart) => {
      const item = state.items.find(
        (item) => item.id === itemInCart.id && item.title.match(search)
      );
      if (item) {
        total += item.price * itemInCart.quantity;
        itens.push({
          ...item,
          quantity: itemInCart.quantity,
        });
      }
      return itens;
    }, typedArray);
    return {
      cartReduce: cartReduce,
      total: total,
    };
  });

  return (
    <>
      <div>
        <Header
          title="Carrinho de Compras"
          description="Confira seus itens no carrinho"
          image=""
        />
      </div>
      <div className={styles.carrinho}>
        {cart.cartReduce.map((item) => (
          <Item key={item.id} {...item} cart />
        ))}
        <div className={styles.total}>
          <strong>Resumo da compra</strong>
          <span>
            Subtotal: <strong>{cart.total.toFixed(2)}</strong>
          </span>
        </div>
        <Button
          type="button"
          onClick={() => dispatch(resetCart())}
        >
          Finalizar compra
        </Button>
      </div>
    </>
  );
}

export default Cart;
