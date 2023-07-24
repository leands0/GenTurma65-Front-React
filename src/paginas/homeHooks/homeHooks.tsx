import React, { useEffect, useState } from "react";

const homeHooks = () => {
  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState("");

  useEffect(() => {
    if (completed) {
      setTarefa("Parabéns, você concluiu a tarefa!");
    }
  }, [completed]);

  return (
    <>
      <h1>Tarefa</h1>
      <h3>{tarefa}</h3>
      <p>Conclua a tarefa</p>
      <button onClick={() => setCompleted(true)}>Concluir tarefa</button>
    </>
  );
};

export default homeHooks;
