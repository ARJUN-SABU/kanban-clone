//styles
import "../styles/BoardScreen.css";

//components
import Board from "./Board";

function BoardScreen() {
  return (
    <div className="boardScreen">
      <div className="boardScreen__top">
        <h1>I am the top details</h1>
      </div>
      <div className="boardScreen__boardsAndCards">
        <Board />
        <Board />
        <Board />
      </div>
    </div>
  );
}
export default BoardScreen;
