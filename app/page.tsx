import executeQuery from "@/app/_lib/db";

interface User {
  id: number;
  name: string;
  avatar: string;
}

export default async function Home() {
  const sql = "select * from users";
  const data = (await executeQuery(sql, "")) as User[];

  return (
    <>
      {data.length > 0 &&
        data.map((user) => (
          <p key={user.id}>
            {user.id} {user.name} {user.avatar}
          </p>
        ))}
    </>
  );
}
