"use client";

import { useRecoilState } from "recoil";
import { ticketState } from "@/app/atoms/ticketState";
import BoardList from "@/app/ui/board/board-list";
import Board from "@/app/ui/board/board";

export default function Page() {
  const [tickets, setTickets] = useRecoilState(ticketState);
  //   console.log(Object.keys(tickets));
  //   console.log(tickets["TO DO"]);

  return (
    <>
      <h2 className="mb-8 text-4xl">Board</h2>

      <BoardList>
        {Object.keys(tickets).map((boardName) => (
          <Board
            key={boardName}
            boardName={boardName}
            tickets={tickets[boardName]}
          />
        ))}
      </BoardList>
    </>
  );
}
