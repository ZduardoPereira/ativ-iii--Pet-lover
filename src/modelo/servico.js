// servico.js
export default class Servico {
    static ultimoId = 0;

    constructor(nome, valor) {
        Servico.ultimoId++;
        this.id = Servico.ultimoId;
        this.nome = nome;
        this.valor = valor;
        this.vendas = 0;
    }

    addVenda() {
        this.vendas++;
    }

    removerVenda() {
        this.vendas--;
    }

    getNome() {
        return this.nome;
    }

    getPreco() {
        return this.valor;
    }

    get getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }
}
