import Image from "next/image";
import Tag from "@/app/ui/tag";
import type { Ticket, LabelType } from "@/app/atoms/ticketState";

type Props = {
  index: number;
  ticket: Ticket;
};

export default function DraggableTicket({ index, ticket }: Props) {
  return (
    <li className="list-none w-full p-3 flex flex-col gap-3 items-start bg-white rounded shadow">
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
  );
}

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
