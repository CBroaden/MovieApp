
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { FaTrashAlt } from "react-icons/fa";
import { revalidatePath } from "next/cache";
import DeleteButton from "./deleteButton";

const prisma = new PrismaClient();

export default async function AllPosts() {
    const session = await getServerSession(options);

    const allPosts = await prisma.posts.findMany({
    orderBy: {
        post_id: "desc",
    },
    });

    const deletePost = async (postId: number) => {
        await prisma.posts.delete({
            where: {
                post_id: postId,
            },
        });
    };

    return (
        <div className="w-full xl mb-4 mx-auto ">
            {allPosts.length > 0 ? (
            <ul>
                {allPosts.map((post: any) => (
                    <li
                        key={post.post_id}
                        className="bg-2 relative [&>*]:p-2 py-2 pl-4 mb-1 shadow shadow-black rounded-xl"
                    >
                    <h2 className="text-xl underline font-bold">
                        {post.movie_title}
                    </h2>
                    <p className="text-lg mx-auto font-medium">{post.content}</p>
                    
                        
                        <h3 className=" font-semibold text-blue-600 text-right mr-4">
                            @{post.author}
                        </h3>

                        {post.author === session?.user?.name && (
                            <DeleteButton postId={post.post_id} />
                        )}
                        
                    </li>
                ))}
            </ul>
            ) : (
            <div className="bg-2 [&>*]:p-2 py-2 pl-4 mb-1 shadow shadow-black rounded-xl">
                <h1 className="text-center font-bold text-3xl">No Recent Posts...</h1>
            </div>
            )}
        </div>
    );
}
