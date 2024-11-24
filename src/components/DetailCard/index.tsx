"use client"

import { ImageContainer } from '../ImageContainer';
import styles from './styles.module.css'
import { useSearchStore } from '@/store/useSearchStore'

export const DetailCard = () => {
  const { selectedSearch } = useSearchStore();

  if (!selectedSearch) return null;

  return (
    <div className={styles.container}>
      <ImageContainer
        className={styles.container_image}
        src={selectedSearch.image}
        alt={selectedSearch.title}
      />
      <span>{selectedSearch.url}</span>
      <h2>{selectedSearch.title}</h2>
      <p>{selectedSearch.description}</p>
    </div>
  )
}