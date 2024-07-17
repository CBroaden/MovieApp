"use server";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();


export default async function deletePost(postId: number) {
    await prisma.posts
      .delete({
        where: {
          post_id: postId,
        },
      })
      .then(async() => {
        await prisma.$disconnect();
        revalidatePath("/posts");
      })
      .catch(async(error: Error) => {
        console.log(error);
        await prisma.$disconnect();
      });
  }