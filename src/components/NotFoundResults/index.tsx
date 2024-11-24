import { NotFoundResultsInterface } from "./type";
import { ErrorType } from "@/lib/faker/types";
import styles from "./styles.module.css";

export const  NotFoundResults = ({searchQuery, errorType}: NotFoundResultsInterface) => {

  return (
    <div>
      {errorType === ErrorType.NO_RESULTS && <p className={styles.text}>No results found for <strong>{searchQuery}</strong></p>}
      <p>Try looking for: <strong>insect, fish, horse, crocodilia, bear, cetacean, cow, lion, rabbit, cat, snake, dog, bird</strong>.</p>
    </div>
  )
}