"use client"

import styles from "./styles.module.css";
import { useSearch } from "@/Hooks/useSearch";

export const SearchButton = () => {
  const { handleSearch } = useSearch();

  return ( <button className={styles.button} onClick={handleSearch}>Buscar</button>)
}