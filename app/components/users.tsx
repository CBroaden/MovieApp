import { sql } from "@vercel/postgres";

export default async function Users() {
  const { rows } = await sql`SELECT * FROM users LIMIT 10;`;

  return (
    <div className="border border-black p-2">
      {rows.map((row) => (
        <div className="" key={row.user_id}>
          <div>
            <button className="m-2">+</button>
            {row.username}
          </div>
          
        </div>
      ))}
    </div>
  );
}