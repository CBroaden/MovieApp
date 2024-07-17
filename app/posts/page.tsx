import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import PostForm from "../components/postform";
import AllPosts from "../components/allposts";

export default function Posts() {
  const session = getServerSession(options);

  return (
    <main className="pt-6 flex flex-col min-h-screen items-center ">
      <h1 className='page-title'>Posts</h1>
      <PostForm/>
      <AllPosts />
      
    </main>
  );
}
