"use client"

import styles from "./styles.module.css";
import { Icons } from "../Icons";
import { useSearchStore } from "@/store/useSearchStore";
import { useSearch } from "@/Hooks/useSearch";
import { SearchBarInterface } from "./types";

export const SearchBar = ({ isLarge = false }: SearchBarInterface) => {
  const { search } = useSearchStore();
  const { handleSubmit, handleClear, handleInputChange } = useSearch();

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.container} ${isLarge ? styles.large : styles.small}`}
      role="search"
      aria-label="Formulario de búsqueda"
    >
      <div className={styles.container_input}>
        <span className={styles.container_input_icon_left} aria-hidden="true">
          <Icons.Search />
        </span>
        <input
          type="text"
          value={search}
          onChange={(handleInputChange)}
          placeholder="Buscar..."
          className={styles.container_input_search}
        />
        {search && (
          <button
            type="button"
            onClick={handleClear}
            className={styles.container_input_clearButton}
            aria-label="Limpiar búsqueda"
          >
            <Icons.Close />
          </button>
        )}
      </div>
    </form>
  );
}