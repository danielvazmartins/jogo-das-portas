export default class PortaModel {
    #numero: number
    #temPresente: boolean
    #selecionada: boolean
    #aberta: boolean

    constructor(numero: number, temPresente: boolean = false, selecionada: boolean = false, aberta: boolean = false) {
        this.#numero = numero
        this.#temPresente = temPresente
        this.#selecionada = selecionada
        this.#aberta = aberta
    }

    get numero(): number {
        return this.#numero
    }

    get temPresente(): boolean {
        return this.#temPresente
    }

    get selecionada(): boolean {
        return this.#selecionada
    }

    get aberta(): boolean {
        return this.#aberta
    }

    toogleSelecionada() {
        return new PortaModel(this.numero, this.temPresente, !this.selecionada, this.aberta)
    }

    abrirPorta() {
        return new PortaModel(this.numero, this.temPresente, false, true)
    }
}