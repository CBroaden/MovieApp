import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { PrismaClient } from "@prisma/client";
import createPost from "../action";

const prisma = new PrismaClient();

export default async function PostForm() {
  const session = await getServerSession(options);


  

  return (
    <div className="cgradient mx-auto w-3/4 md:w-1/2 max-w-md my-5 rounded p-4 border-2 border-black shadow-lg shadow-black">
      <form action={createPost} method="get">
        {session ? (
          <h1 className="">{session.user?.name}</h1>
        ) : (
          <h1 className="text-center text-red-900 font-semibold">
            Must Be Signed In To Create Posts
          </h1>
        )}
        <input
          type="text"
          id="movie"
          name="movie"
          placeholder="Movie Title..."
          className="my-2 px-1 w-1/2"
        />
        <br />
        <textarea
          className="w-full px-1"
          rows={6}
          id="content"
          name="content"
          placeholder="What did you think of the movie?"
        />
        <br />
        <input
          type="submit"
          id="post"
          name="post"
          value="Create Post"
          className="rounded border border-black py-1 px-5 bg-white hover:bg-neutral-300 cursor-pointer flex mx-auto"
        />
      </form>
    </div>
  );
}
