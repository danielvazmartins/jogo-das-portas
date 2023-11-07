import styles from "@/styles/Presente.module.css"

export default function Presente() {

    return (
        <div className={styles.gift}>
            <div className={styles.cover}></div>
            <div className={styles.box}></div>
            <div className={styles.hStrip}></div>
            <div className={styles.vStrip}></div>
        </div>
    )
}