import { useState } from "react";

interface Props {
  data: string[];
  // Prop de tipo función: recibe un string y no retorna nada (void)
  // El '?' la hace opcional
  onSelect?: (elemento: string) => void;
  onHover?: (elemento: string) => void;
}

function List({ data, onSelect, onHover }: Props) {
  const [index, setIndex] = useState(-1);

  // Manejador que gestiona el estado interno (hijo) y le avisa al padre
  function handleClick(i: number, elemento: string) {
    setIndex(i); // 1. Cambia el estado visual del hijo (pinta 'active')

    // 2. Notifica al componente Padre pasando el valor seleccionado
    // Usamos '?.' para ejecutarla de forma segura solo si la prop fue enviada
    onSelect?.(elemento);
  }

  return (
    <ul className="list-group">
      {data.map((elemento, i) => (
        <li
          key={elemento}
          onClick={() => handleClick(i, elemento)}
          onMouseEnter={() => onHover?.(elemento)}
          className={`list-group-item ${index === i ? "active" : ""}`}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
