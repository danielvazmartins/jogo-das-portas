import PortaModel from "@/models/PortaModel"
import styles from "@/styles/Porta.module.css"
import Presente from "./Presente"

interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {
    const porta: PortaModel = props.value

    const alternarSelecao = e => props.onChange(porta.toogleSelecionada())
    const abrirPorta = e => {
        e.stopPropagation()
        props.onChange(porta.abrirPorta())
    }

    const renderizarPorta = () => (
        <div className={styles.porta} onClick={alternarSelecao}>
            <p className={styles.numero}>{porta.numero}</p>
            <i className={styles.macaneta} onClick={abrirPorta}></i>
        </div>
    )

    return (
        <div className={`${styles.area} ${(porta.selecionada)? styles.selecionada: ''}`}>
            <div className={styles.estrutura}>
                {!porta.aberta
                    ? renderizarPorta()
                    : porta.temPresente
                        ? <Presente></Presente>
                        : ''}
            </div>
            <div className={styles.piso}></div>
        </div>
    )
}