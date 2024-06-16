import React, { useState, useEffect } from 'react';
import Empresa from '../modelo/empresa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Produto from '../modelo/produto'; // Certifique-se de ajustar o caminho real do seu modelo
import Servico from '../modelo/servico'; // Certifique-se de ajustar o caminho real do seu modelo
import DetalhesProduto from './detalheProduto';
import DetalhesServico from './detalheServico';

const empresa = new Empresa();

const ListaProdutosServicos = () => {
  const [listaProdutos, setListaProdutos] = useState([]);
  const [listaServicos, setListaServicos] = useState([]);
  const [transacaoAtiva, setTransacaoAtiva] = useState(false);
  const [clienteSelecionado, setClienteSelecionado] = useState('');
  const [quantidadeSelecionada, setQuantidadeSelecionada] = useState(1);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [servicoSelecionado, setServicoSelecionado] = useState(null);
  const [produtoParaEdicao, setProdutoParaEdicao] = useState(null);
  const [servicoParaEdicao, setServicoParaEdicao] = useState(null);

  useEffect(() => {
    setListaProdutos(empresa.getProdutos);
    setListaServicos(empresa.getServicos);
  }, []);

  const removerProduto = (id) => {
    const novaListaProdutos = listaProdutos.filter((produto) => produto.getId() !== id);
    setListaProdutos(novaListaProdutos);
  };

  const removerServico = (id) => {
    const novaListaServicos = listaServicos.filter((servico) => servico.getId !== id);
    setListaServicos(novaListaServicos);
  };

  const handleClienteChange = (event) => {
    setClienteSelecionado(event.target.value);
  };

  const handleQuantidadeChange = (event) => {
    setQuantidadeSelecionada(Number(event.target.value));
  };

  const handleIniciarTransacao = (id, tipo) => {
    setTransacaoAtiva(true);
    if (tipo === 'produto') {
      setProdutoSelecionado(id);
      setServicoSelecionado(null);
    } else {
      setServicoSelecionado(id);
      setProdutoSelecionado(null);
    }
  };

  const handleFecharTransacao = () => {
    console.log("Transação concluída:", {
      cliente: clienteSelecionado,
      quantidade: quantidadeSelecionada,
      produtoSelecionado,
      servicoSelecionado,
    });
    setTransacaoAtiva(false);
    setClienteSelecionado('');
    setQuantidadeSelecionada(1);
    setProdutoSelecionado(null);
    setServicoSelecionado(null);
  };

  const handleEditarProduto = (produto) => {
    setProdutoParaEdicao(produto);
  };

  const handleEditarServico = (servico) => {
    setServicoParaEdicao(servico);
  };

  const handleAtualizarProduto = (id, novoNome, novoPreco) => {
    console.log(`Atualizando produto ${id} com novo nome: ${novoNome} e novo preço: ${novoPreco}`);
    setProdutoParaEdicao(null);
  };

  const handleAtualizarServico = (id, novoNome, novoPreco) => {
    console.log(`Atualizando serviço ${id} com novo nome: ${novoNome} e novo preço: ${novoPreco}`);
    setServicoParaEdicao(null);
  };

  const handleCancelarEdicaoProduto = () => {
    setProdutoParaEdicao(null);
  };

  const handleCancelarEdicaoServico = () => {
    setServicoParaEdicao(null);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#e3f2fd', width: '90%', margin: 'auto' }}>
      <h2>Lista de Produtos</h2>
      <ul className="list-group">
        {listaProdutos.map((produto) => (
          <li key={produto.getId()} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{produto.getNomeProduto()} - R$ {produto.getPrecoProduto()}</span>
            <div>
              <button className="btn btn-danger mr-2" onClick={() => removerProduto(produto.getId())}>Remover</button>
              <button className="btn btn-primary mr-2" onClick={() => handleEditarProduto(produto)}>Editar</button>
              <button className="btn btn-primary" onClick={() => handleIniciarTransacao(produto.getId(), 'produto')}>Comprar</button>
            </div>
          </li>
        ))}
      </ul>
      <br />
      <h2>Lista de Serviços</h2>
      <ul className="list-group">
        {listaServicos.map((servico) => (
          <li key={servico.getId} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{servico.getNome()} - R$ {servico.getPreco()}</span>
            <div>
              <button className="btn btn-danger mr-2" onClick={() => removerServico(servico.getId)}>Remover</button>
              <button className="btn btn-primary mr-2" onClick={() => handleEditarServico(servico)}>Editar</button>
              <button className="btn btn-primary" onClick={() => handleIniciarTransacao(servico.getId, 'servico')}>Contratar</button>
            </div>
          </li>
        ))}
      </ul>

      {produtoParaEdicao && (
        <DetalhesProduto produto={produtoParaEdicao} onAtualizarProduto={handleAtualizarProduto} onCancel={handleCancelarEdicaoProduto} />
      )}

      {servicoParaEdicao && (
        <DetalhesServico servico={servicoParaEdicao} onAtualizarServico={handleAtualizarServico} onCancel={handleCancelarEdicaoServico} />
      )}

      {transacaoAtiva && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px', width: '50%' }}>
            <h3>Escolha o cliente e a quantidade</h3>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="cliente">Cliente:</label>
              <input type="text" id="cliente" value={clienteSelecionado} onChange={handleClienteChange} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="quantidade">Quantidade:</label>
              <input type="number" id="quantidade" value={quantidadeSelecionada} onChange={handleQuantidadeChange} />
            </div>
            <button className="btn btn-success" onClick={handleFecharTransacao}>Concluir</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListaProdutosServicos;
