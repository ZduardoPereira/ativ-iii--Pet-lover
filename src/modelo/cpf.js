class CPF {
    constructor(valor, dataEmissao) {
        this.valor = valor;
        this.dataEmissao = dataEmissao;
    }

    get getValor() {
        return this.valor;
    }

    get getDataEmissao() {
        return this.dataEmissao;
    }

    setValor(valor) {
        this.valor = valor;
    }

    static criarComValor(valor, dataEmissao) {
        return new CPF(valor, dataEmissao);
    }
}

export default CPF;
