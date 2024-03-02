type Props = {};

export default function BoardList({}: Props) {
  return (
    <div className="w-full grid grid-cols-4 gap-4">
      <div className="bg-violet-100">board list 1</div>
      <div className="bg-violet-100">board list 3</div>
      <div className="bg-violet-100">board list 4</div>
      <div className="bg-violet-100">board list 2</div>
    </div>
  );
}
