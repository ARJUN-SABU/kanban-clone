//libraries and modules
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

//styles
import "../styles/BoardScreen.css";

//components
import Board from "./Board";

//data
import cardData from "../data/cardData.json";

function BoardScreen() {
  const [toDoList, setToDoList] = useState(cardData.toDoCards.cards);
  const [progressList, setProgressList] = useState(
    cardData.onProgressCards.cards
  );
  const [doneList, setDoneList] = useState(cardData.doneCards.cards);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    if (
      result.source.droppableId == result.destination.droppableId &&
      result.source.index == result.destination.index
    )
      return;

    if (result.source.droppableId == result.destination.droppableId) {
      //rearrange the same list.
      let currentList = [];
      if (result.source.droppableId == "toDoList")
        currentList = Array.from(toDoList);
      else if (result.source.droppableId == "progressList")
        currentList = Array.from(progressList);
      else if (result.source.droppableId == "doneList")
        currentList = Array.from(doneList);

      let removedElement = currentList.splice(result.source.index, 1)[0];

      currentList.splice(result.destination.index, 0, removedElement);

      if (result.source.droppableId == "toDoList") setToDoList(currentList);
      else if (result.source.droppableId == "progressList")
        setProgressList(currentList);
      else if (result.source.droppableId == "doneList")
        setDoneList(currentList);
    } else {
      //swapping items across two different lists.
      let sourceList = [];
      let destinationList = [];

      if (result.source.droppableId == "toDoList")
        sourceList = Array.from(toDoList);
      else if (result.source.droppableId == "progressList")
        sourceList = Array.from(progressList);
      else if (result.source.droppableId == "doneList")
        sourceList = Array.from(doneList);

      if (result.destination.droppableId == "toDoList")
        destinationList = Array.from(toDoList);
      else if (result.destination.droppableId == "progressList")
        destinationList = Array.from(progressList);
      else if (result.destination.droppableId == "doneList")
        destinationList = Array.from(doneList);

      // console.log("source -> ", sourceList);
      // console.log("destination -> ", destinationList);

      let removedElement = sourceList.splice(result.source.index, 1)[0];
      destinationList.splice(result.destination.index, 0, removedElement);

      // console.log("source -> ", sourceList);
      // console.log("destination -> ", destinationList);

      if (result.source.droppableId == "toDoList") setToDoList(sourceList);
      else if (result.source.droppableId == "progressList")
        setProgressList(sourceList);
      else if (result.source.droppableId == "doneList") setDoneList(sourceList);

      if (result.destination.droppableId == "toDoList")
        setToDoList(destinationList);
      else if (result.destination.droppableId == "progressList")
        setProgressList(destinationList);
      else if (result.destination.droppableId == "doneList")
        setDoneList(destinationList);
    }
  }

  return (
    <div className="boardScreen">
      <div className="boardScreen__boardsAndCards">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Board cards={toDoList} boardId={"toDoList"} />
          <Board cards={progressList} boardId={"progressList"} />
          <Board cards={doneList} boardId={"doneList"} />
        </DragDropContext>
      </div>
    </div>
  );
}
export default BoardScreen;
