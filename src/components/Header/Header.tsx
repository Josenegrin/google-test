import { Avatar } from "../Avatar/Avatar";
import { Icons } from "../Icons/Icons";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.container}>
      <div>
        <span><strong>Agile Content</strong> Frontend Test</span>
      </div>
      <div className={styles.icons_container}>
        <Icons.Aplications />
        <Avatar />
      </div>
    </header> 
  )
}