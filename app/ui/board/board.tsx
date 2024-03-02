import DraggableTicket from "@/app/ui/board/ticket";
import type { Ticket } from "@/app/atoms/ticketState";

type Props = {
  boardName: string;
  tickets: Ticket[];
};

export default function Board({ boardName, tickets }: Props) {
  return (
    <ul className="min-h-96 p-2 flex flex-col gap-5 bg-slate-100 rounded-md">
      <div className="sm:min-h-14 md:min-h-0 flex items-center gap-2 text-gray-500">
        <h3 className="text-lg font-bold">{boardName}</h3>
        <span className="rounded-full px-2 text-sm bg-gray-200">
          {tickets.length}
        </span>
      </div>
      {tickets.map((ticket, index) => (
        <DraggableTicket key={ticket.id} ticket={ticket} index={index} />
      ))}
    </ul>
  );
}
