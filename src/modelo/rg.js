// rg.js
export default class RG {
    constructor(valor, dataEmissao) {
        this.valor = valor;
        this.dataEmissao = dataEmissao;
    }

    getValor() {
        return this.valor;
    }

    setValor(valor) {
        this.valor = valor;
    }

    getDataEmissao() {
        return this.dataEmissao;
    }
}
