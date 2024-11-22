"use client"
import { useState } from "react";
import styles from "./SearchBar.module.css";
import { Icons } from "../Icons/Icons";
import { useRouter } from "next/navigation";

export const SearchBar = ({
  placeholder = "Buscar...",
  initialValue = "",
  large = false,
}) => {
  const { push } = useRouter();

  const [search, setSearch] = useState(initialValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClear = () => setSearch("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search)
    push(`/results?query=${encodeURIComponent(search)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.searchForm} ${large ? styles.large : styles.small}`}
      role="search"
      aria-label="Formulario de búsqueda"
    >
      <div className={styles.inputContainer}>
        <span className={styles.icon} aria-hidden="true">
          <Icons.Search />
        </span>
        <input
          type="text"
          value={search}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={styles.searchInput}
        />
        {search && (
          <button
            type="button"
            onClick={handleClear}
            className={styles.clearButton}
            aria-label="Limpiar búsqueda"
          >
            <Icons.Close />
          </button>
        )}
      </div>
    </form>
  );
}