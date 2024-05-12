"use client";
import styles from "../../page.module.scss";

export default function Search() {
    return (
        <input
            type="text"
            placeholder="Поиск"
            className={styles.main__search_item}
        />
    )
}