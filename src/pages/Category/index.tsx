import Header from "components/Header";
import Item from "components/Item";
import { useTypedSelector } from "hooks";
import { useParams } from "react-router-dom";
import styles from "./Category.module.scss";

function Category() {
  const { categoryName } = useParams();
  const { category, items } = useTypedSelector((state) => {
    const search = new RegExp(state.search, "i");
    return {
      category: state.categories.find(
        (category) => category.id === categoryName
      ),
      items: state.items.filter(
        (item) => item.category === categoryName && item.title.match(search)
      ),
    };
  });
  return (
    <>
      <div>
        <Header
          title={category!.name}
          description={category!.description}
          image={category!.header}
        />
      </div>
      <div className={styles.items}>
        {items?.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </div>
    </>
  );
}

export default Category;
