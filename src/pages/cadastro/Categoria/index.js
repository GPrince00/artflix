import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState(["Teste"]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  }
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor
    })
  }

  function handlerChange(e) {
    setValor(
      e.target.getAttribute('name'),
      e.target.value
    )
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {valores.nome}</h1>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
        setCategorias([
            ...categorias,
            valores
        ]);
      }}>
        <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              name="nome"
              value={valores.nome}
              onChange={handlerChange}
              />
          </label>
        </div>
        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              name="descricao"
              value={valores.descrição}
              onChange={handlerChange}
              />
          </label>
        </div>
        <div>
          <label>
            Cor:
            <input
              type="color"
              name="cor"
              value={valores.cor}
              onChange={handlerChange}
              />
          </label>
        </div>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;