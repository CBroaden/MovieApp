import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'

const prisma = new PrismaClient()



async function main() {
  // ... you will write your Prisma Client queries here
  const session = await getServerSession(options)
  const username = session?.user?.name
  await prisma.posts.create({
    data: {
      author: username!,
      movie_title: '',
      content: '',
      likes: 0,
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })