"use client"
import { SearchBar } from "@/components/SearchBar/SearchBar";
import styles from "./page.module.css";
import { Logo } from "@/components/Logo/Logo";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main_container}>
        <Logo />
        <SearchBar large/>
      </main>
    </div>
  );
}
