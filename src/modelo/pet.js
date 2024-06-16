// pet.js
import Cliente from "./cliente";

export default class Pet {
    constructor(nome, raca, genero, tipo) {
        this.nome = nome;
        this.raca = raca;
        this.genero = genero;
        this.tipo = tipo;
    }

    setTipo(novoTipo) {
        this.tipo = novoTipo;
    }

    setRaca(novaRaca) {
        this.raca = novaRaca;
    }

    setGenero(novoGenero) {
        this.genero = novoGenero;
    }

    setNome(novoNome) {
        this.nome = novoNome;
    }

    getNome() {
        return this.nome;
    }

    getRaca() {
        return this.raca;
    }

    getGenero() {
        return this.genero;
    }

    getTipo() {
        return this.tipo;
    }
}
