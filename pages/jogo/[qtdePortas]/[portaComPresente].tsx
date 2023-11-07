import { useEffect, useState } from "react"

import { atualizarPortas, criarPortas } from "@/functions/portas"
import Porta from "@/components/Porta"
import { useRouter } from "next/router"

export default function Jogo() {
    const [portas, setPortas] = useState([])
    const router = useRouter()

    useEffect(() => {
        const { qtdePortas, portaComPresente } = router.query
        setPortas(criarPortas(+qtdePortas, +portaComPresente))
    }, [ router.query ])

	function renderizarPortas() {
		return (
			portas.map(porta => {
				return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}></Porta>
			})
		)
	}

	return (
		<div style={{
			display: "flex",
			flexWrap: "wrap"
		}}>
			{renderizarPortas()}
		</div>
	)
}