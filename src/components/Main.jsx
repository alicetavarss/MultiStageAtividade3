import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import instituicoesEnsinoDataSet from '../datasets/censoescolar.js';
import Carrossel from './Carrossel.jsx';
import InstituicoesEnsinoRankingCard from './InstituicoesEnsinoRankingCard.jsx';

const Main = () => {
  let instituicoesEnsinoJson = [...instituicoesEnsinoDataSet];

  let [instituicoesEnsino, setInstituicoesEnsino] = useState(
    instituicoesEnsinoJson,
  );

  let [incremento, setIncremento] = useState(0); // 2 elementos.
  // let incremento = lista[0]; // Primeiro Elemento -> inteiro
  // let setIncremento = lista[1]; // Segundo Elemento -> fn (função) () => {}
  // let [incremento, setIncremento] = lista;

  let handleIncrementarClick = () => {
    // incremento = incremento + 1;
    setIncremento(incremento + 1);
    // Js em LS.
    // let incrementoDiv = document.getElementById("incremento");
    // incrementoDiv.innerHTML = incremento;
    console.log('clicou no butão! ' + incremento);
  };

  return (
    <main>
      <Carrossel />
      <InstituicoesEnsinoRankingCard
        instituicoesEnsino={instituicoesEnsinoJson}
      />

      <div className="incremento">{incremento}</div>

      <Button onClick={handleIncrementarClick}>Adicionar</Button>

      {/* Cards */}
    </main>
  );
};

export default Main;
