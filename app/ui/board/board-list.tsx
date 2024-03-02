type Props = { children: React.ReactNode };

export default function BoardList({ children }: Props) {
  return <div className="w-full grid grid-cols-4 gap-4">{children}</div>;
}
