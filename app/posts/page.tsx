import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import PostForm from "../components/postform";
import AllPosts from "../components/allposts";

const prisma = new PrismaClient();

export default function Posts() {

  type User =
    | {
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
      }
    | undefined;

  type Props = {
    user: User;
    pagetype: string;
  };

  return (
    <div className="w-full max-w-2xl mx-auto pt-16 ">
      <h1 className="text-4xl text-center ">Posts</h1>
      <PostForm />
      <AllPosts />
    </div>
  );
}
