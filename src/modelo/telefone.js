// telefone.js
export default class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }

    getDdd() {
        return this.ddd;
    }

    getNumero() {
        return this.numero;
    }
}
