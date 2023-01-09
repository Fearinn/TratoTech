import Button from "components/Button";
import Header from "components/Header";
import { useTypedDispatch, useTypedSelector } from "hooks";
import styles from "./Advertise.module.scss";
import { FieldValues, useForm } from "react-hook-form";
import { registerItem } from "store/reducers/items";
import IItem from "interfaces/Item";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";
import Input from "components/Input";

function Advertise() {
  const { categoryName } = useParams();

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      title: undefined,
      description: undefined,
      photo: undefined,
      category: categoryName || "",
      price: NaN,
    },
  });

  const { errors } = formState;

  const categories = useTypedSelector((state) => state.categories);

  const dispatch = useTypedDispatch();

  function submit(params: FieldValues) {
    params = { ...params, id: uuid() };
    dispatch(registerItem(params as IItem));
  }

  return (
    <div className={styles.container}>
      <Header
        title="Anuncie aqui!"
        description="Anuncie seu produto no melhor site do Brasil!"
      />
      <form className={styles.formulario} onSubmit={handleSubmit(submit)}>
        <Input
          className={errors.title ? styles["input-erro"] : ""}
          {...register("title", { required: "O campo nome é obrigatório" })}
          type="text"
          placeholder="Nome do produto"
        />
        {errors.title && (
          <span className={styles["mensagem-erro"]}>
            {errors.title.message}
          </span>
        )}
        <Input
          className={errors.description ? styles["input-erro"] : ""}
          {...register("description", {
            required: "O campo descrição é obrigatório",
          })}
          type="text"
          placeholder="Descrição do produto"
        />
        {errors.description && (
          <span className={styles["mensagem-erro"]}>
            {errors.description.message}
          </span>
        )}
        <Input
          className={errors.photo ? styles["input-erro"] : ""}
          {...register("photo", { required: "O campo URL é obrigatório" })}
          type="text"
          placeholder="URL da imagem do produto"
        />
        {errors.photo && (
          <span className={styles["mensagem-erro"]}>
            {errors.photo.message}
          </span>
        )}
        <select
          disabled={!!categoryName}
          className={errors.category ? styles["input-erro"] : ""}
          {...register("category", {
            required: "O campo categoria é obrigatório",
          })}
        >
          <option value="" disabled>
            Selecione a categoria
          </option>
          {categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
        {errors.category && (
          <span className={styles["mensagem-erro"]}>
            {errors.category.message}
          </span>
        )}
        <Input
          className={errors.price ? styles["input-erro"] : ""}
          {...register("price", {
            required: "O campo preço é obrigatório",
            valueAsNumber: true,
          })}
          type="number"
          placeholder="Preço do produto"
        />
        {errors.price && (
          <span className={styles["mensagem-erro"]}>
            {errors.price.message}
          </span>
        )}
        <Button type="submit">Cadastrar</Button>
      </form>
    </div>
  );
}

export default Advertise;
