//styles
import "../styles/Board.css";

//component
import Card from "./Card";

function Board({ boardData }) {
  return (
    <div className="board">
      {boardData.cards.map((card) => (
        <Card title={card.title} />
      ))}
    </div>
  );
}

export default Board;
