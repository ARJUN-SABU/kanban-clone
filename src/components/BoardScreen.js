//libraries and modules
import { useEffect } from "react";

//styles
import "../styles/BoardScreen.css";

//components
import Board from "./Board";

//data
import cardData from "../data/cardData.json";

function BoardScreen() {
  return (
    <div className="boardScreen">
      <div className="boardScreen__boardsAndCards">
        <Board boardData={cardData.toDoCards} />
        <Board boardData={cardData.onProgressCards} />
        <Board boardData={cardData.doneCards} />
      </div>
    </div>
  );
}
export default BoardScreen;
