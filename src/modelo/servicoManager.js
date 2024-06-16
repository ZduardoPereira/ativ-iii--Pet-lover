import Servico from "./servico";

export default class ServicoManager {
    constructor() {
        this.servicos = [];
    }

    adicionarServico(servico) {
        this.servicos.push(servico);
    }

    listarServicos() {
        return this.servicos;
    }
}
