"use client"
import { FakerDataInterface } from '@/lib/faker/types'
import styles from './styles.module.css'
import { useSearchStore } from '@/store/useSearchStore'

interface ListInterface {
  data: FakerDataInterface,
}

export const Item = ({data}: ListInterface) => {
  const { setSelectedSearch } = useSearchStore();

  return (
    <li className={styles.container}>
      <span>{data.url}</span>
      <button onClick={() => setSelectedSearch(data)}>{data.title}</button>
      <p>{data.description}</p>
    </li>
  )
}