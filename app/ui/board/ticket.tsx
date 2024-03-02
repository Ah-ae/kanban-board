import Image from "next/image";
import Tag from "@/app/ui/tag";

type LabelType = 1 | 2 | 3 | 4;

interface Ticket {
  id: string;
  title: string;
  description: string;
  label: LabelType;
  number: 25;
  user: {
    id: string;
    name: string;
    avatar?: string;
  };
}

const ticket1: Ticket = {
  id: `ticket-${crypto.randomUUID()}`,
  title: "Engage Jupiter Express for outer solar system travel",
  description: "",
  label: 4,
  number: 25,
  user: {
    id: `user-${crypto.randomUUID()}`,
    name: "John",
    avatar: "1",
  },
};

type Props = {};

export default function Ticket({}: Props) {
  return (
    <li className="list-none w-80 p-3 flex flex-col gap-3 items-start rounded shadow">
      <p className="text-lg text-gray-700">{ticket1.title}</p>
      <Tag type={ticket1.label} text={getLabel(ticket1.label)} />
      <div className="ml-auto flex items-center gap-2">
        <span className="font-semibold text-gray-500">{`TIS-${ticket1.number}`}</span>
        <Image
          width={28}
          height={28}
          src={`/avatar/${ticket1.user.avatar}.png`}
          alt="user avatar image"
        />
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
