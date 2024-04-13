
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()



export default async function AllPosts() {
    const allPosts = await prisma.posts.findMany({
        orderBy: {
            post_id: 'desc',
        }
      })
      console.dir(allPosts, { depth: null })

    return(
        <div className="w-full max-w-2xl mx-auto ">
            <ul>
                {allPosts.map((post: any) => (
                    <li key={post.post_id} className="my-2 [&>*]:p-2 py-2 border-2 border-black bg-main rounded-lg shadow-lg shadow-black">
                        <h2 className="text-xl text-white text-center underline font-medium">{post.movie_title}</h2>
                        <p className="text-lg w-full border-y border-black bg-white bg-opacity-75 backdrop-blur-3xl">{post.content}</p>
                        <h3 className="text-right text-sm text-white">@{post.author}</h3>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}