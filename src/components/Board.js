//libraries and modules
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

//styles
import "../styles/Board.css";

//component
import Card from "./Card";

const CardContainer = styled.div`
  box-shadow: ${(props) => boxShadowChange(props)};
  background-color: white;
  align-items: center;
  border-radius: 20px;
  padding: 0.5em 0.8em 0.5em 0.5em;
  margin: 10px 12px;
`;

function boxShadowChange(props) {
  return props.isDragging ? "0 0 10px 0 black" : "none";
}

function Board({ cards, boardId, boardName, themeColor }) {
  return (
    <div className={`boardContainer boardContainer--${boardId}`}>
      <div
        className="boardContainer__top"
        style={{
          borderBottom: `3px solid ${themeColor}`,
        }}
      >
        <div className="boardContainer__top__left">
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "100%",
              backgroundColor: themeColor,
            }}
          ></div>
          <p className="boardContainer__top__left__boardName">{boardName}</p>
          <p className="boardContainer__top__left__cardCount">{cards.length}</p>
        </div>

        {boardName == "To Do" ? (
          <img
            className="boardContainer__top__addButton"
            src="projectImages/middlescreen-invite-addbutton.svg"
          ></img>
        ) : (
          ""
        )}
      </div>
      <Droppable droppableId={boardId}>
        {(provided) => (
          <div
            className={`board board--${boardId}`}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {cards?.map((card, index) => (
              <Draggable key={card.id} draggableId={card.id} index={index}>
                {(provided, snapshot) => (
                  <CardContainer
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                  >
                    <Card cardDetails={card} />
                  </CardContainer>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default Board;
