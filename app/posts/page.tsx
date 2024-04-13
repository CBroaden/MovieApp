import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import PostForm from "../components/postform";
import AllPosts from "../components/allposts";
import Discover from "../components/discover";

export default function Posts() {
  const session = getServerSession(options);

  return (
    <div className="w-full mx-auto pt-6 ">
      <div className='w-full min-h-screen py-10 popclapboard flex flex-col md:flex-row justify-center border-y border-black items-center'>
        
        <h1 className='md:w-2/5 mb-6 md:mb-0 mx-auto text-center text-white'>
          <Discover />
        </h1>

        <PostForm/>
      </div>
      <div className="w-full watching min-h-screen flex items-center ">
        <AllPosts />
      </div>
    </div>
  );
}
