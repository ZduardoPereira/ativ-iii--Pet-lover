import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";

class CadastroServico {
    constructor(servicos) {
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    cadastrarServico() {
        console.log(`\nInício do cadastro do serviço:`);
        let nome = this.entrada.receberTexto(`Por favor, insira o nome do serviço prestado: `);
        let valor = this.entrada.receberNumero(`E agora, por favor, insira o preço desse serviço: R$`);
        let novoServico = new Servico(nome, valor);
        this.servicos.push(novoServico);
        console.log(`\nCadastro de serviço concluído :)\n`);
    }

    getServicos() {
        return this.servicos;
    }
}

export default CadastroServico;
