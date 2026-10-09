import { useState } from "react";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";

function App() {
  // 1. ESTADOS (State)
  // Estado para la lista dinámica de elementos
  const [data, setData] = useState<string[]>(["Homero", "Marge", "Bart"]);

  // Estado para el contador de selecciones realizadas en la lista
  const [totalSelecciones, setTotalSelecciones] = useState<number>(0);

  // Estado para simular la carga en el botón de "Ver"
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 2. MANEJADORES DE EVENTOS (Handlers)

  // Agrega un nuevo elemento al arreglo manteniendo la inmutabilidad
  const addMinion = () => {
    setData([...data, "Minion"]);
  };

  // Elimina el último elemento del arreglo sin mutar el estado original
  const deleteMinion = () => {
    setData(data.slice(0, -1));
  };

  // Incrementa el contador cuando el hijo (List) emite el evento 'onSelect'
  const handleSelect = (elemento: string) => {
    console.log(`Seleccionado: ${elemento}`);
    setTotalSelecciones(totalSelecciones + 1);
  };

  // Acción cuando el cursor pasa sobre un elemento de la lista
  const handleOver = (elemento: string) => {
    console.log(`El mouse está sobre: ${elemento}`);
  };

  // Alterna el estado de carga del botón "Ver"
  const handleClick = () => {
    setIsLoading(!isLoading);
  };

  // 3. RENDERIZADO CONDICIONAL POR VARIABLE
  // Evalúa si hay elementos en el arreglo usando el comportamiento Truthy/Falsy de JS
  const contenido = data.length ? (
    <List data={data} onSelect={handleSelect} onHover={handleOver} />
  ) : (
    <p className="text-muted">No hay elementos para mostrar</p>
  );

  // 4. ESTRUCTURA JSX
  return (
    <div className="container mt-4">
      <Card>
        <CardBody
          titulo="Gestión de Lista"
          texto="Añade o elimina elementos de la lista dinámica"
        />

        {/* Acciones para modificar el estado dinámico */}
        <div className="d-flex gap-2 my-2">
          <Button onClick={addMinion}>Agregar</Button>
          <Button onClick={deleteMinion}>Eliminar</Button>
        </div>

        {/* Renderizado condicional de la lista */}
        {contenido}

        {/* Botón secundario con estado de carga */}
        <div className="mt-3">
          <Button isLoading={isLoading} onClick={handleClick}>
            Ver
          </Button>
        </div>

        <h4 className="mt-2">Veces presionado: {totalSelecciones}</h4>
      </Card>
    </div>
  );
}

export default App;
