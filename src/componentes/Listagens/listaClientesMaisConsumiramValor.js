import React, { useEffect, useState } from 'react';
import ClientesQueMaisConsumiramServicosValor from '../../negocio/listagens/clienteMaisValor';

const ListaClientesMaisConsumiramValor = () => {
  const [listaClientes, setListaClientes] = useState([]);
  const [hasConsumedClients, setHasConsumedClients] = useState(false);

  useEffect(() => {
    const clientesMaisConsumiramValor = new ClientesQueMaisConsumiramServicosValor([]);
    const consoleLog = console.log;
    console.log = (message) => setListaClientes((prev) => [...prev, message]);

    if (!hasConsumedClients) {
      clientesMaisConsumiramValor.listar();
      setHasConsumedClients(true);
    }

    console.log = consoleLog;
  }, [hasConsumedClients]);

  return (
    <div>
      {listaClientes.length > 0 ? (
        <ul>
          {listaClientes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>Não há clientes que mais consumiram em valor.</p>
      )}
    </div>
  );
};

export default ListaClientesMaisConsumiramValor;
