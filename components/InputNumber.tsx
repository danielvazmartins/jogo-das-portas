import styles from "@/styles/InputNumber.module.css"

interface InputNumberProps {
    label: string
    value: number
    onChange: (newValue: number) => void
}

export default function InputNumber(props: InputNumberProps) {
    return (
        <div className={styles.content}>
            <span className={styles.label}>{props.label}</span>
            <span className={styles.value} >{props.value}</span>
            <div className={styles.botoes}>
                <div className={styles.btn} onClick={() => {props.onChange(props.value - 1)}}>-</div>
                <div className={styles.btn} onClick={() => {props.onChange(props.value + 1)}}>+</div>
            </div>
        </div>
    )
}