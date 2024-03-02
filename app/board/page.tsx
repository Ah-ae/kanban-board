"use client";

import { useRecoilState } from "recoil";
import { ticketState } from "@/app/atoms/ticketState";
import BoardList from "@/app/ui/board/board-list";
import Ticket from "@/app/ui/board/ticket";

export default function Page() {
  const [tickets, setTickets] = useRecoilState(ticketState);
  console.log(tickets);

  return (
    <>
      <h2 className="mb-4 text-4xl">Board</h2>
      <BoardList />
      <Ticket />
    </>
  );
}
