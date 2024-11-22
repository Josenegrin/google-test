import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <span> © Google 2021 </span>
      <span> Version 0.1.0 </span>
    </footer>
  )
}