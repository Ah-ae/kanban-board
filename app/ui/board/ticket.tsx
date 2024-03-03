import { memo } from "react";
import Image from "next/image";
import { Draggable } from "react-beautiful-dnd";
import Tag from "@/app/ui/tag";
import type { Ticket, LabelType } from "@/app/atoms/ticketState";

type Props = {
  index: number;
  ticket: Ticket;
};

function DraggableTicket({ index, ticket }: Props) {
  return (
    <Draggable draggableId={ticket.id} index={index}>
      {(provided, snapshot) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`list-none w-full p-3 flex flex-col gap-3 items-start bg-white rounded ${
            snapshot.isDragging ? "bg-blue-50 shadow-lg" : "shadow"
          } cursor-pointer`}
        >
          <p className="text-lg text-gray-700">{ticket.title}</p>
          <Tag type={ticket.label} text={getLabel(ticket.label)} />
          <div className="ml-auto flex items-center gap-2">
            <span className="font-semibold text-gray-500">{`TIS-${ticket.number}`}</span>
            {ticket.assignee && (
              <Image
                width={28}
                height={28}
                src={`/avatar/${ticket.assignee.avatar}.png`}
                alt="user avatar image"
              />
            )}
          </div>
        </li>
      )}
    </Draggable>
  );
}

export default memo(DraggableTicket);

const getLabel = (type: LabelType) => {
  switch (type) {
    case 1:
      return "SPACE TRAVEL PARTNERS";
    case 2:
      return "LOCAL MARS OFFICE";
    case 3:
      return "SEESPACEEZ PLUS";
    case 4:
      return "LARGE TEAM SUPPORT";
    default:
      return "BASIC PROJECT";
  }
};
