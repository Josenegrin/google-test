import Image from "next/image";
import styles from "./styles.module.css";
import { ImageContainerInterface } from "./type";

export const ImageContainer = ({ src, alt, className = ''}: ImageContainerInterface) => {
  return (
    <figure className={`${styles.container} ${className}`}>
      <Image
        className={styles.container_image}
        src={src}
        alt={alt}
        sizes="100% 100%"
        priority
        fill/>
    </figure>
  )
}