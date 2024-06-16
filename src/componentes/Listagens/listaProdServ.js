import React, { useState, useEffect } from 'react';
import Empresa from '../../modelo/empresa';
import ProdutosEServicosMaisConsumidos from '../../negocio/listagens/servProd';

const empresa = new Empresa();

const ListaProdutosServicos = () => {
  const [listaProdutosServicos, setListaProdutosServicos] = useState([]);
  const [hasConsumedItems, setHasConsumedItems] = useState(false);

  useEffect(() => {
    const produtosServicosMaisConsumidos = new ProdutosEServicosMaisConsumidos(
      empresa.getProdutos,
      empresa.getServicos,
      empresa.getClientes
    );

    const consoleLog = console.log;
    console.log = (message) => setListaProdutosServicos((prev) => [...prev, message]);

    if (!hasConsumedItems) {
      produtosServicosMaisConsumidos.listar();
      setHasConsumedItems(true);
    }

    console.log = consoleLog;
  }, [hasConsumedItems]);

  return (
    <div>
      {listaProdutosServicos.length > 0 ? (
        <ul>
          {listaProdutosServicos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>Não há produtos/serviços consumidos.</p>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ListaProdutosServicos />
    </div>
  );
};

export default App;
