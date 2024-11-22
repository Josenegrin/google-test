import Image from "next/image"
import styles from "./Logo.module.css"

export const Logo = () => {
  return (
    <figure className={styles.image_container}>
      <Image
        className={styles.image}
        src="/logo.png"
        sizes="100% 100%"
        priority
        alt="Logo"
        fill/>
    </figure>
  )
}