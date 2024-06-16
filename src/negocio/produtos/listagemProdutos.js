import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Listagem from "../listagem";

class ListagemProduto extends Listagem {
    constructor(produtos) {
        super();
        this.produtos = produtos;
    }

    listar() {
        console.log(`\nLista de todos os produtos: `);
        console.log(`--------------------------------------`);

        if (Array.isArray(this.produtos)) {
            this.produtos.forEach(produto => {
                console.log(`ID: ${produto.getId()}`);
                console.log(`Nome: ${produto.getNomeProduto()}`);
                console.log(`Descrição: ${produto.getDescricao()}`);
                console.log(`Preço da Venda: ${produto.getPrecoProduto()}`);
                console.log(`Estoque Atual: ${produto.getEstoqueAtual()}`);
                console.log(`Quantidade Consumida: ${produto.getQuantidadeConsumida()}`);
                console.log(`--------------------------------------`);
            });
        } else {
            console.log('A lista de produtos não é uma array.');
        }
    }
}

export default ListagemProduto;
