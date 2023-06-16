//styles
import "../styles/BoardScreen.css";

//components
import Board from "./Board";

//data
import cardData from "../data/cardData.json";

function BoardScreen() {
  return (
    <div className="boardScreen">
      <div className="boardScreen__top">
        <h1>I am the top details</h1>
      </div>
      <div className="boardScreen__boardsAndCards">
        <div className="boardScreen__boardsAndCards__boardContainer">
          <div className="boardScreen__boardsAndCards__boardInformation">
            <h2>To Do</h2>
          </div>
          <Board boardData={cardData.toDoCards} />
        </div>
        <div className="boardScreen__boardsAndCards__boardContainer">
          <div className="boardScreen__boardsAndCards__boardInformation">
            <h2>On Progress</h2>
          </div>
          <Board boardData={cardData.onProgressCards} />
        </div>
        <div className="boardScreen__boardsAndCards__boardContainer">
          <div className="boardScreen__boardsAndCards__boardInformation">
            <h2>Done</h2>
          </div>
          <Board boardData={cardData.doneCards} />
        </div>
      </div>
    </div>
  );
}
export default BoardScreen;
