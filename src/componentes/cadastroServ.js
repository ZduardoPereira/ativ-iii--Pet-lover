import React, { useState } from 'react';
import Servico from '../modelo/servico';

const ServicoForm = ({ onCadastrarServico }) => {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState(0);

  const cadastrarServico = () => {
    if (nome && valor > 0) {
      const novoServico = new Servico(nome, valor);
      onCadastrarServico(novoServico);

      setNome('');
      setValor(0);
    } else {
      alert('Preencha todos os campos obrigatórios.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Cadastro de Serviço</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">
            Nome do Serviço
          </label>
          <input
            type="text"
            className="form-control"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="valor" className="form-label">
            Valor do Serviço
          </label>
          <input
            type="number"
            className="form-control"
            id="valor"
            value={valor}
            onChange={(e) => setValor(Number(e.target.value))}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={cadastrarServico}>
          Cadastrar Serviço
        </button>
      </form>
    </div>
  );
};

export default ServicoForm;
