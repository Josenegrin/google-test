import styles from "./styles.module.css";

export default function SkeletonList() {
  const skeletonItems = Array.from({ length: 7 });

  return (
    <ul className={styles.container}>
      {skeletonItems.map((_, index) => (
        <li key={index} className={styles.container_item}>
          <div className={styles.container_item_span}></div>
          <div className={styles.container_item_anchor}></div>
          <div className={styles.container_item_text}></div>
          <div className={styles.container_item_text}></div>
        </li>
      ))}
    </ul>
  );
}
