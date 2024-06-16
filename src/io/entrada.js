import promptSync from "prompt-sync";

class Entrada {
    receberNumero(mensagem) {
        let prompt = promptSync();
        let valor = prompt(mensagem);
        let numero = new Number(valor);
        return numero.valueOf();
    }

    receberTexto(mensagem) {
        let prompt = promptSync();
        let texto = prompt(mensagem);
        return texto;
    }
}

export default Entrada;
