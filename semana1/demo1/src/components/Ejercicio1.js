import React, { useState } from "react";

const Ejercicio1 = () => {
  const [valor, setValor] = useState(0);

  const incrementar = () => setValor(valor + 1);
  const decrementar = () => setValor(valor - 1);
  const resetear = () => setValor(0);

  return (
    <div>
      <h1>Contador</h1>
      <div>{valor}</div>
      <div>
        <button onClick={decrementar}>Decrementar</button>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={resetear}>Resetear</button>
      </div>
    </div>
  );
};

export default Ejercicio1;