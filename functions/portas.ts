import PortaModel from "@/models/PortaModel";

export function criarPortas(qtde: number, portaComPresente: number): Array<PortaModel> {
    return Array.from({length: qtde}, (_, index) => {
        const numeroPorta = index + 1
        const temPresente = portaComPresente == numeroPorta
        return new PortaModel(numeroPorta, temPresente)
    })
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
    return portas.map(porta => {
        return (portaModificada.numero === porta.numero)? portaModificada: porta
    })
}