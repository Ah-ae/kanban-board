type TagType = 1 | 2 | 3 | 4;

type Props = {
  type: TagType;
  text: string;
};

export default function Tag({ type, text }: Props) {
  return (
    <span
      className={`px-2 py-1 rounded-lg font-semibold ${getBackgroundColor(
        type
      )} ${getTextColor(type)}`}
    >
      {text}
    </span>
  );
}

const getBackgroundColor = (type: TagType) => {
  switch (type) {
    case 1:
      return "bg-yellow-300";
    case 2:
      return "bg-cyan-400";
    case 3:
      return "bg-orange-400";
    case 4:
      return "bg-violet-700";
    default:
      return "bg-black";
  }
};

const getTextColor = (type: TagType) => {
  switch (type) {
    case 1:
      return "text-gray-600";
    case 2:
      return "text-white";
    case 3:
      return "text-white";
    case 4:
      return "text-white";
    default:
      return "text-white";
  }
};
