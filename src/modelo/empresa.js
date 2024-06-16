import listagemClientes from "../insert/insertCliente";
import Cliente from "./cliente";
import Produto from "./produto";
import Servico from "./servico";

export default class Empresa {
    constructor() {
        this.clientes = listagemClientes;
        this.produtos = [];
        this.servicos = [];

        // Adiciona produtos à lista
        this.adicionarProduto(new Produto('Grand Plus para gatos castrados', 'Ração para gatos castrados 10,1kg', 128.75, 15));
        this.adicionarProduto(new Produto('Pedigree para cachorros medios/grandes', 'Ração para cachorros castrados 3kg', 25.19, 12));
        this.adicionarProduto(new Produto('Caixa de transporte pequena', 'Ideal para gatos e cachorros pequenos', 68.90, 25));
        this.adicionarProduto(new Produto('Antipulgas Simparic', 'Cães de 5 a 10kg 20mg 1 comprimido', 64.90, 18));

        // Exemplo: Adiciona alguns serviços à lista
        this.adicionarServico(new Servico("Banho e tosa", 60));
        this.adicionarServico(new Servico("Banho", 40));
        this.adicionarServico(new Servico('Tosa', 30));
        this.adicionarServico(new Servico('Consulta veterinaria', 90));
        // Adicione mais serviços conforme necessário
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    adicionarServico(servico) {
        this.servicos.push(servico);
    }

    get getClientes() {
        return this.clientes;
    }

    get getProdutos() {
        return this.produtos;
    }

    get getServicos() {
        return this.servicos;
    }

    listarProdutos() {
        return this.produtos;
    }

    listarServicos() {
        return this.servicos;
    }
}
