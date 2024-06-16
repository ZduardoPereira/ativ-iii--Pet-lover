import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";

class AtualizarServico {
    constructor(servicos) {
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    atualizarServico() {
        console.log(`Escolha a opção de busca:`);
        console.log(`1 - Procurar por ID`);
        console.log(`2 - Procurar por Nome`);

        let opcaoBusca = this.entrada.receberNumero('Insira a opção de busca desejada: ');

        if (opcaoBusca === 1) {
            let id = this.entrada.receberNumero('Insira o ID do serviço que deseja atualizar: ');
            const index = this.servicos.findIndex(servico => servico.id === id);
            this.processarResultado(index);
        } else if (opcaoBusca === 2) {
            let nome = this.entrada.receberTexto('Insira o nome do serviço que deseja atualizar: ');
            const index = this.servicos.findIndex(servico => servico.nome.toLowerCase() === nome.toLowerCase());
            this.processarResultado(index);
        } else {
            console.log(`Opção inválida.`);
        }

        console.log(`--------------------------------------`);
    }

    processarResultado(index) {
        if (index !== -1) {
            const servico = this.servicos[index];
            console.log(`Serviço encontrado: ID ${servico.id} | Nome: ${servico.nome} | Valor: R$ ${servico.valor}`);

            const novoNomeServico = this.entrada.receberTexto('Insira o novo nome do serviço: ');
            const novoValorServico = this.entrada.receberNumero('Insira o novo valor do serviço: R$ ');

            servico.nome = novoNomeServico;
            servico.valor = novoValorServico;

            console.log(`Serviço atualizado com sucesso.`);
        } else {
            console.log(`Serviço não encontrado.`);
        }
    }
}

export default AtualizarServico;
