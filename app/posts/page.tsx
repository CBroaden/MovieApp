import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import PostForm from "../components/postform";
import AllPosts from "../components/allposts";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export default function Posts() {
  const session = getServerSession(options);

  return (
    <div className="w-full mx-auto pt-6 ">
      <div className='w-full py-10 popclapboard flex flex-col md:flex-row justify-center border-y border-black items-center'>
        
        <h1 className='md:w-2/5 mx-auto text-center text-white'>
          PLACEHOLDER
        </h1>

        <PostForm/>
      </div>
      
      <AllPosts />
    </div>
  );
}
