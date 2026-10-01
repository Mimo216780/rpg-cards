import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Köp kaffe", done: false },
    { id: 2, text: "Öppna campet", done: true },
    { id: 3, text: "Pusha till GitHub", done: false },
    { id: 4, text: "Ny uppgift", done: false },
  ]);
  const [text, setText] = useState("");

  function addTodo(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos([
      ...todos,
      { id: Date.now(), text: trimmed, done: false },
    ]);
    setText("");
  }

  function toggleDone(id) {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  return (
    <main className="app">
      <h1>Min ToDo</h1>
      <form className="input-row" onSubmit={addTodo}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Skriv en uppgift..."
          aria-label="Ny uppgift"
        />
        <button type="submit">Lägg till</button>
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.done ? "todo completed" : "todo"}
          >
            <span>{todo.text}</span>{" "}
            <button type="button" onClick={() => toggleDone(todo.id)}>
              {todo.done ? "Avmarkera" : "Klar"}
            </button>{" "}
            <button type="button" onClick={() => removeTodo(todo.id)}>
              Ta bort
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;