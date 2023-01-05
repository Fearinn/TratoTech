import { useTypedDispatch, useTypedSelector } from "hooks";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { changeSearch, resetSearch } from "store/reducers/search";
import styles from "./Search.module.scss";

function Search() {
  const location = useLocation();
  const search = useTypedSelector((state) => state.search);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(resetSearch());
  }, [location.pathname, dispatch]);
  
  return (
    <div className={styles.busca}>
      <input
        type="text"
        name="search"
        className={styles.input}
        placeholder="O que você procura?"
        value={search}
        onChange={(event) => dispatch(changeSearch(event.target.value))}
      />
    </div>
  );
}

export default Search;
