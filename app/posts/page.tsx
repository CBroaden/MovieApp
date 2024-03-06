import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import PostForm from "../components/postform";
import AllPosts from "../components/allposts";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export default function Posts() {
  const session = getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/posts");
  }

  else return (
    <div className="w-full max-w-2xl mx-auto pt-16 ">
      <h1 className="text-4xl text-center font-semibold">Posts</h1>
      <PostForm />
      <AllPosts />
    </div>
  );
}
