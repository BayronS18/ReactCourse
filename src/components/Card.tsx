import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}
function Card(props: CardProps) {
  const { children } = props;
  return (
    <div className="card" style={{ width: "350px" }}>
      {children}
    </div>
  );
}
interface CardBodyProps {
  titulo: string;
  texto?: string;
}

export function CardBody(props: CardBodyProps) {
  const { titulo, texto } = props;
  return (
    <>
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{texto}</p>
      </div>
    </>
  );
}

export default Card;
