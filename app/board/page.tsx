"use client";

import { useRecoilState } from "recoil";
import { DragDropContext, type DropResult } from "react-beautiful-dnd";
import { ticketState } from "@/app/atoms/ticketState";
import BoardList from "@/app/ui/board/board-list";
import Board from "@/app/ui/board/board";

export default function Page() {
  const [tickets, setTickets] = useRecoilState(ticketState);

  const onDragEnd = ({ draggableId, source, destination }: DropResult) => {
    if (!destination) return;

    if (source.droppableId === destination?.droppableId) {
      // same board movement
      setTickets((allBoards) => {
        const copiedBoard = [...allBoards[source.droppableId]];
        // 0) dragging하는 task obj를 임시저장
        const taskObj = copiedBoard[source.index];
        // 1) source.index 삭제
        copiedBoard.splice(source.index, 1);
        // 2) destination.source에 임시저장한 task obj 삽입
        copiedBoard.splice(destination?.index, 0, taskObj);
        return { ...allBoards, [source.droppableId]: copiedBoard };
      });
    }
    if (source.droppableId !== destination.droppableId) {
      // cross board movement
      setTickets((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const destinationBoard = [...allBoards[destination.droppableId]];
        const deletedTodo = sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination.index, 0, ...deletedTodo);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
  };

  return (
    <>
      <h2 className="mb-8 text-4xl">Board</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <BoardList>
          {Object.keys(tickets).map((boardName) => (
            <Board
              key={boardName}
              boardName={boardName}
              tickets={tickets[boardName]}
            />
          ))}
        </BoardList>
      </DragDropContext>
    </>
  );
}
