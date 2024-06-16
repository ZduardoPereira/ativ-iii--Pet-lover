const Produto = require("../../modelo/produto");
const Servico = require("../../modelo/servico");
const Cliente = require("../../modelo/cliente");

class ProdutosEServicosMaisConsumidos {
    constructor(produtos, servicos, clientes) {
        this.produtos = produtos;
        this.servicos = servicos;
        this.clientes = clientes;
    }

    listar() {
        const result = [];
        const contagemProdutos = new Map();
        const contagemServicos = new Map();

        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                contagemProdutos.set(produto, (contagemProdutos.get(produto) || 0) + 1);
            });
            cliente.getServicosConsumidos.forEach(servico => {
                contagemServicos.set(servico, (contagemServicos.get(servico) || 0) + 1);
            });
        });

        const arrayContagemProdutos = Array.from(contagemProdutos.entries());
        const arrayContagemServicos = Array.from(contagemServicos.entries());
        arrayContagemProdutos.sort((a, b) => b[1] - a[1]);
        arrayContagemServicos.sort((a, b) => b[1] - a[1]);

        result.push(`\nProdutos mais consumidos:`);
        arrayContagemProdutos.forEach(([produto, contagem]) => {
            result.push(`Produto: ${produto.getNomeProduto()}, Quantidade Consumida: ${contagem}`);
        });

        result.push(`\nServiços mais consumidos:`);
        arrayContagemServicos.forEach(([servico, contagem]) => {
            result.push(`Serviço: ${servico.getNome()}, Quantidade Consumida: ${contagem}`);
        });

        result.push(`--------------------------------------`);

        return result;
    }
}

module.exports = ProdutosEServicosMaisConsumidos;
