"use server";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export default async function createPost(formData: FormData) {
    

    const session = await getServerSession(options)

    await prisma.posts.create({
      data: {
        author: session?.user?.name || "Anonymous",
        movie_title: formData.get("movie") as string,
        content: formData.get("content") as string,
        likes: 0,
        timestamp: new Date(),
      },
    })

    .then (() => {
      return redirect("/posts")
    })
    .catch ((error: Error) => {
      console.log(error)
      return redirect("/posts")
    })

  }