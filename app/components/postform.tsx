import { getServerSession } from "next-auth"
import { options } from "../api/auth/[...nextauth]/options"



export default async function PostForm() {

    const session = await getServerSession(options)


    return (
        <div className="bg-gray-500 rounded p-4 border-2 border-black">
            <form>
            {session ? (
        <h1 className="text-center">{session.user?.name}</h1>
      ) : (
        <h1 className=" text-center text-red-900 font-semibold">
        You are Not Authenticated !!!
      </h1>
      )}
                <label htmlFor='movie'>Movie</label><br/>
                <input type='text' id="movie" name="movie"/><br/>

                <label htmlFor='content'>Post</label><br/>
                <textarea className="w-full" id="content" name="content"/>

            </form>
        </div>
    )
}