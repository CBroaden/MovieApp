import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import createPost from "../action";
import Image from "next/image";


export default async function PostForm() {
  const session = await getServerSession(options);

  return (
    <div className="bg-main mx-auto w-3/4 md:w-2/5 max-w-md rounded p-4 border-2 border-black shadow-lg shadow-black">
      <form action={createPost}>
        {session ? (
          <>
            <Image alt="User Profile Image" className="rounded-full border mx-auto border-black" src={session.user?.image!} width={30} height={30} />
            <h1 className="text-center mb-1 text-white text-lg font-semibold">@{session.user?.name}</h1>
          </>
        ) : (
          <h1 className="text-center text-white font-semibold pb-4 text-lg">
            @Anonymous
          </h1>
        )}
        <input
          type="text"
          id="movie"
          name="movie"
          placeholder="Movie Title..."
          className="my-2 px-1 w-1/2"
          autoComplete="off"
          required
        />
        <br />
        <textarea
          className="w-full px-1"
          rows={6}
          id="content"
          name="content"
          placeholder="What did you think of the movie?"
          required
        />
        <br />
        <input
          type="submit"
          id="post"
          name="post"
          value="Create Post"
          className="btn flex mx-auto"
        />
      </form>
    </div>
  );
}
