"use client"
import Link from "next/link";
import { Avatar } from "../Avatar";
import { Icons } from "../Icons";
import { Logo } from "../Logo";
import { SearchBar } from "../SearchBar";
import styles from "./styles.module.css";
import { usePathname } from "next/navigation";
import { PATHS } from "@/lib/routePaths";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.container}>
      <div className={styles.container_left}>
        {pathname === PATHS.RESULTS ? (
          <div className={styles.container_left_logo_search}>
            <Link href={PATHS.HOME}>
              <Logo />
            </Link>
            <SearchBar />
          </div>
          ) : (
            <span><strong>Agile Content </strong>Frontend Test</span>
          )
        }
      </div>
      <div className={styles.container_rigth}>
        <Icons.Aplications />
        <Avatar />
      </div>
    </header> 
  )
}