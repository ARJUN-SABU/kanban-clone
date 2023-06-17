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
  display: flex;
  align-items: center;
  border: solid 2px #d0d0d0;
  border-radius: 0.2em;
  padding: 0.5em 0.8em 0.5em 0.5em;
  margin: 10px 12px;
`;

function boxShadowChange(props) {
  return props.isDragging ? "0 0 10px 0 black" : "none";
}

function Board({ cards, boardId }) {
  return (
    <div className={`boardContainer boardContainer--${boardId}`}>
      <div>
        <h1>Board Name</h1>
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
                    <Card title={card.title} />
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
