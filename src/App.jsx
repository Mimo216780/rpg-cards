import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    "Städda",
    "Tvätta kläder",
    "Ätta lunch",
  ]);
  const [draft, setDraft] = useState("");

  function handleChange(e) {
    setDraft(e.target.value);
  }

  function handleAdd() {
    const text = draft.trim();
    if (text === "") {
      return;
    }

    setTodos([todos, text]);
    setDraft("");
  }

  return (
    <main>
      <h1>Övnings-todo</h1>
      <p>Kladd just nu: {draft}</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <input
        type="text"
        value={draft}
        onChange={handleChange}
        placeholder="Skriv uppgift..."
      />
      <button type="button" onClick={handleAdd}>Läggtill</button>
    </main>
  );
}

export default App;


