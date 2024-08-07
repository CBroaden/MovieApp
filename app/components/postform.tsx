import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import createPost from "../action";
import Image from "next/image";


export default async function PostForm() {
  const session = await getServerSession(options);

  return (
    <div className="bg-2 w-full pt-6 mb-2 shadow shadow-black rounded-xl">
      <form className="px-6 pb-2 w-full" action={createPost}>
        {session ? (
          <div className="flex items-center">
            <Image alt="User Profile Image" className="rounded border border-black" src={session.user?.image!} width={40} height={40} />
            <h1 className="h-full text-xl font-semibold ml-1">{session.user?.name}</h1>
          </div>
        ) : (
          <h1 className="text-center font-semibold pb-4 text-lg">
            @Anonymous
          </h1>
        )}
        <input
          type="text"
          id="movie"
          name="movie"
          placeholder="Movie Title..."
          className="my-2 p-1 w-1/2 font-bold border border-black"
          autoComplete="off"
          required
        />
        <br />
        <textarea
          className="w-full border p-1 border-black font-semibold"
          rows={3}
          id="content"
          name="content"
          placeholder="What do you think of the movie?"
          required
        />
        <input
          type="submit"
          id="post"
          name="post"
          value="Create Post"
          className="btn flex ml-auto mb-2 text-black"
        />
      </form>
    </div>
  );
}
