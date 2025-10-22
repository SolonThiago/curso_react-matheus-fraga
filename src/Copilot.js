import { useState, useEffect } from "react";

function Copilot() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefas, setTarefas] = useState(() => {
    const tarefasStorage = localStorage.getItem("@tarefa");
    return tarefasStorage ? JSON.parse(tarefasStorage) : [];
  });

  useEffect(() => {
    localStorage.setItem("@tarefa", JSON.stringify(tarefas));
  }, [tarefas]);

  // Função para capitalizar cada palavra
  const formatarTexto = (texto) => {
    return texto
      .split(" ")
      .map(
        (palavra) =>
          palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()
      )
      .join(" ");
  };

  // Atualiza o campo de entrada com texto formatado
  const handleChange = (e) => {
    const textoFormatado = formatarTexto(e.target.value);
    setNovaTarefa(textoFormatado);
  };

  // Adiciona nova tarefa
  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;
    setTarefas((prevTarefas) => [...prevTarefas, novaTarefa.trim()]);
    setNovaTarefa("");
  };

  // Detecta Enter pressionado
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      adicionarTarefa();
    }
  };

  const removerTarefa = (index) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>📋 Minha Lista de Tarefas</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          value={novaTarefa}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder="Digite uma tarefa"
          style={{
            flex: 1,
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "16px",
          }}
        />
        <button
          onClick={adicionarTarefa}
          style={{
            padding: "8px 12px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Adicionar
        </button>
      </div>

      {tarefas.length === 0 ? (
        <p>Você ainda não tem tarefas cadastradas.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tarefas.map((tarefa, index) => (
            <li
              key={index}
              style={{
                background: "#f9f9f9",
                padding: "10px",
                marginBottom: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            >
              {tarefa}
              <button
                onClick={() => removerTarefa(index)}
                style={{
                  background: "#e74c3c",
                  color: "white",
                  border: "none",
                  padding: "6px 10px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Copilot;
