import styles from "./styles.module.css"
import { ImageContainer } from "../ImageContainer"

export const Logo = ({large = false}) => {
  return (
    <ImageContainer
      src="/logo.png"
      alt="Logo"
      className={`${large ? styles.large : styles.small}`}
    />
  )
}