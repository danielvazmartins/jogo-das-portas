import Link from "next/link";

import styles from "@/styles/Home.module.css"
import Cartao from "@/components/Cartao";
import InputNumber from "@/components/InputNumber";
import { useState } from "react";

export default function Home() {
	const [qtdePortas, setQtdePortas] = useState(5)
	const [portaComPresente, setPortaComPresente] = useState(2)

	return (
		<div className={styles.cartoes}>
			<div>
				<Cartao bgColor="green">Jogo das Portas</Cartao>
				<Cartao>
					<InputNumber label="Qtde de Portas" value={qtdePortas} onChange={newValue => setQtdePortas(newValue)}></InputNumber>
				</Cartao>
			</div>
			<div>
				<Cartao>
				<InputNumber label="Porta Premiada" value={portaComPresente} onChange={newValue => setPortaComPresente(newValue)}></InputNumber>
				</Cartao>
				<Cartao bgColor="blue">
					<Link href={`/jogo/${qtdePortas}/${portaComPresente}`}>
						Iniciar
					</Link>
				</Cartao>
			</div>
		</div>
	)
}
