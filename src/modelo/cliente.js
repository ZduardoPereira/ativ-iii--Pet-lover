import CPF from "./cpf";
import Pet from "./pet";
import Produto from "./produto";
import Servico from "./servico";
import Telefone from "./telefone";
import RG from "./rg";

export default class Cliente {
    static idCounter = 1;

    constructor(nome, nomeSocial, cpf, rgs = [], telefones = []) {
        this.id = Cliente.getNextId();
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.rgs = rgs;
        this.dataCadastro = new Date();
        this.telefones = telefones;
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
        this.pets = [];
    }

    static getNextId() {
        return Cliente.idCounter++;
    }

    adicionarTelefone(telefone) {
        this.telefones.push(telefone);
    }

    get getTelefones() {
        return this.telefones;
    }

    adicionarServicosConsumidos(servicos) {
        this.servicosConsumidos.push(servicos);
    }

    adicionarProdutoConsumido(produto) {
        this.produtosConsumidos.push(produto);
    }

    getValorServicosConsumidos() {
        let valor = 0;
        this.servicosConsumidos.forEach((servico) => {
            valor += servico.valor;
        });
        return valor;
    }

    getValorProdutosConsumidos() {
        let valor = 0;
        this.produtosConsumidos.forEach((produto) => {
            valor += produto.precoProduto;
        });
        return valor;
    }

    setTelefones(telefones) {
        this.telefones = telefones;
    }

    setRGs(rgs) {
        this.rgs = rgs;
    }

    setDataCadastro(data) {
        this.dataCadastro = data;
    }

    setValor(novoCPF) {
        this.cpf = novoCPF;
    }

    getValor(novoCPF) {
        this.cpf = novoCPF;
    }

    getCpf() {
        return this.cpf;
    }

    setCpf(cpf) {
        this.cpf = cpf;
    }

    get getRgs() {
        return this.rgs;
    }

    get getDataCadastro() {
        return this.dataCadastro;
    }

    get getProdutosConsumidos() {
        return this.produtosConsumidos;
    }

    get getServicosConsumidos() {
        return this.servicosConsumidos;
    }

    get getPets() {
        return this.pets;
    }

    setPets(pets) {
        return this.pets;
    }

    get getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    get getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    get getNomeSocial() {
        return this.nomeSocial;
    }

    setNomeSocial(nomeSocial) {
        this.nomeSocial = nomeSocial;
    }

    removerPet(petIndex) {
        if (petIndex >= 0 && petIndex < this.pets.length) {
            this.pets.splice(petIndex, 1);
        } else {
            throw new Error('Índice inválido para remover o pet.');
        }
    }

    atualizarPet(petIndex, novoNome, novaRaca, novoGenero, novoTipo) {
        if (petIndex >= 0 && petIndex < this.pets.length) {
            const pet = this.pets[petIndex];
            pet.setNome(novoNome);
            pet.setRaca(novaRaca);
            pet.setGenero(novoGenero);
            pet.setTipo(novoTipo);
        } else {
            throw new Error('Índice inválido para atualizar o pet.');
        }
    }

    adicionarPet(pet) {
        this.pets.push(pet);
    }
}
