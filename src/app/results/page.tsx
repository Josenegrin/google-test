"use client"

import { List } from "@/components/List";
import styles from "./page.module.css";
import SkeletonList from "@/components/SkeletonList";
import { NotFoundResults } from "@/components/NotFoundResults";
import { DetailCard } from "@/components/DetailCard";
import { useSearchStore } from "@/store/useSearchStore";
import { useResponsiveModal } from "@/Hooks/useResponsiveModal";
import { Modal } from "@/components/Modal";

export default function Results() {
  const { search, selectedSearch, setSelectedSearch, data, isLoading, error } = useSearchStore();
  const { isMobileView } = useResponsiveModal();

  return (
    <section className={styles.results_container}>
      <div className={styles.results_container_list}>
        {isLoading && <SkeletonList />}
        {!isLoading && data.length > 0 && <List data={data} />}
        {error && <NotFoundResults searchQuery={search} errorType={error} />}
      </div>
      {!isMobileView && (
        <div className={styles.results_container_details}>
          <DetailCard />
        </div>
      )}
      {isMobileView && selectedSearch && (
        <Modal isOpen={isMobileView} onClose={() => setSelectedSearch(null)}>
          <DetailCard />
        </Modal>
      )}
    </section>
  )
}