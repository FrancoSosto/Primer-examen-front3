import { useState } from "react";
import Card from './Card'
import Error from './Error'

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [nombre, setNombre] = useState("");
  const [banda, setBanda] = useState("");
  const [error, setError] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      nombre.length < 3 ||
      nombre.startsWith(" ") ||
      banda.length < 6 ||
      banda.startsWith(" ")
    ) {
      setError(true);
      setShowCard(false);
      return;
    }
    setError(false);
    setShowCard(true);
  };

  const handleCardClose = () => {
    setNombre("");
    setBanda("");
    setShowCard(false);
  };

  return (
    <div className="app">
      <h1 className="title">¿Cual es tu banda favorita?</h1>
      <form onSubmit={handleSubmit} className="form">
        {error && <Error>Por favor chequea que la información sea correcta</Error>}
        <div>
          <label>Nombre:</label>
          <input
            placeholder="Ingresa tu nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Banda favorita:</label>
          <input
            placeholder="Ingresa tu banda favorita"
            type="text"
            value={banda}
            onChange={(e) => setBanda(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {showCard && <Card nombre={nombre} banda={banda} onClose={handleCardClose} />}
    </div>
  );
}

export default App;
