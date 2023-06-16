//libraries and modules
import { useEffect } from "react";

//styles
import "../styles/BoardScreen.css";

//components
import Board from "./Board";

//data
import cardData from "../data/cardData.json";

function BoardScreen() {
  //logic to hanlde drag and drop of cards between the boards
  useEffect(() => {
    const draggables = document.querySelectorAll(".card--draggable");
    const containers = document.querySelectorAll(".board");

    draggables.forEach((draggable) => {
      draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
      });

      draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
      });
    });

    containers.forEach((container) => {
      container.addEventListener("dragover", (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY);
        console.log(afterElement);
        const currentDraggable = document.querySelector(".dragging");

        if (!afterElement) {
          container.appendChild(currentDraggable);
        } else {
          container.insertBefore(currentDraggable, afterElement);
        }
      });
    });

    function getDragAfterElement(container, cursorYPosition) {
      const draggableElements = [
        ...container.querySelectorAll(".card--draggable:not(.dragging)"),
      ];
      return draggableElements.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = cursorYPosition - (box.top + box.height / 2);
          if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
          } else {
            return closest;
          }
        },
        { offset: Number.NEGATIVE_INFINITY }
      ).element;
    }
  }, []);

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
