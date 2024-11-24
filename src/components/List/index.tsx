import styles from './styles.module.css'
import { Item } from "../Item"
import { ListInterface } from "./type";

export const List = ({data}: ListInterface) => {
  return (
    <ul className={styles.container}>
      {data.length && data.map((item, index: number) => (
        <Item key={`list-item-${item.id}-${index}`} data={item}/>
      ))}
    </ul>
  )
}