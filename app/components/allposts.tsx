
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
        <div className="w-full max-w-2xl mb-4 mx-auto ">
            <ul>
                {allPosts.map((post: any) => (
                    <li key={post.post_id} className="bg-neutral-100 [&>*]:p-2 py-2 pl-4 mb-1 shadow shadow-black rounded-xl">
                        <h2 className="text-xl underline font-bold">{post.movie_title}</h2>
                        <p className="text-lg font-medium">{post.content}</p>
                        <h3 className="text-right font-bold text-md text-blue-600 mr-4">@{post.author}</h3>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}