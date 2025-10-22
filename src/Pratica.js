import { useState, useEffect } from "react";

function Pratica() {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem("@tarefa");

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@tarefa", JSON.stringify(tarefas));
  }, [tarefas]);

  function handleregister(e) {
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput("");
  }

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <form onSubmit={handleregister}>
        <label>Nome da tarefa:</label>
        <br />
        <input
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />

        <button type="submit">Registrar</button>
      </form>

      <br />
      <br />

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa};</li>
        ))}
      </ul>
    </div>
  );
}

export default Pratica;
