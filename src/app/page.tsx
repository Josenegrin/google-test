"use client"
import { SearchBar } from "@/components/SearchBar";
import styles from "./page.module.css";
import { Logo } from "@/components/Logo";
import { SearchButton } from "@/components/SearchButton";

export default function Home() {
  return (
    <section className={styles.main_container}>
      <Logo large />
      <SearchBar isLarge />
      <SearchButton />
    </section>
  );
}
