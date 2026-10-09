import { ReactNode } from "react";

// Definición del contrato de Props
interface ButtonProps {
  children: ReactNode; // Contenido adaptable dentro de las etiquetas del botón
  isLoading?: boolean; // Prop opcional para deshabilitar y mostrar estado de carga
  onClick: () => void; // Función callback que notifica la interacción al padre
}

function Button({ children, isLoading = false, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isLoading} // Deshabilita el botón de forma nativa en el DOM
      className={`btn btn-${isLoading ? "secondary" : "primary"}`} // Aplica estilos dinámicos de Bootstrap
    >
      {/* Renderizado condicional del texto interno */}
      {isLoading ? "Cargando..." : children}
    </button>
  );
}

export default Button;
