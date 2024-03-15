import Image from "next/image";
import executeQuery from "@/app/_lib/db";

export default async function Home() {
  const sql = 'select * from users'
  const data = await executeQuery(sql, '')
  const getdata = JSON.parse(JSON.stringify(data))
  console.log(getdata)

  return (
    <>
      <p>Home page</p>
      <p>{getdata.map((data, i) => {
        return (
          <>
            <p>
              {data.id} {data.name} {data.avatar}
            </p>
          </>
        )
      })}</p>
    </>
  );
}
