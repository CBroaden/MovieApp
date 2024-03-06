"use server";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export default async function createPost(formData: FormData) {
  const session = await getServerSession(options);

  const username = session?.user?.name;

  if (!session) {
    return redirect("/api/auth/signin");
  } else {
    await prisma.posts
      .create({
        data: {
          author: session?.user?.name || "Anonymous",
          movie_title: formData.get("movie") as string,
          content: formData.get("content") as string,
          likes: 0,
          timestamp: new Date(),
        },
      })

      .then(async() => {
        await prisma.$disconnect()
        return redirect("/posts");
      })
      .catch(async(error: Error) => {
        console.log(error);
        await prisma.$disconnect()
        return redirect("/posts");
      });
  }
}
