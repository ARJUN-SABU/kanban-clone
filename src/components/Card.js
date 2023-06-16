//styles
import "../styles/Card.css";

function Card({ title }) {
  return (
    <div className="card card--draggable" draggable="true">
      <h1>{title}</h1>
    </div>
  );
}

export default Card;
