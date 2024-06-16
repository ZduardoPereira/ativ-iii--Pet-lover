class ListagemServico extends Listagem {
    constructor(servicos) {
        super();
        this.servicos = servicos;
    }

    listar() {
        console.log(`\nLista de todos os serviços:`);
        console.log(`--------------------------------------`);
        this.servicos.forEach(servico => {
            console.log(`ID: ` + servico.id);
            console.log(`Nome: ` + servico.nome);
            console.log(`Preço: ` + servico.valor);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}

export default ListagemServico;
