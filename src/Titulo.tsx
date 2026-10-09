// COMPONENTE: Una función que retorna código JSX (HTML dinámico)
function Titulo() {
  // 1. LÓGICA / ESTADO LOCAL: Puedes definir variables, constantes o lógica de JS
  const nombre = "Bayron";

  // 2. RENDERIZADO CONDICIONAL: Dependiendo de la lógica, retornas un JSX u otro
  if (nombre) {
    // Las llaves {nombre} nos permiten "inyectar" código/variables de JS dentro del HTML
    return <h1>Hola {nombre}</h1>;
  }

  return <h1>Hola Mundo</h1>;
}

// EXPORTACIÓN: Permite que otros archivos (como App.tsx) puedan importar y usar este componente
export default Titulo;
