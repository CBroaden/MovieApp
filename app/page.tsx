
import Movies from './components/movies';
import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';
import PostForm from './components/postform';
import Discover from './components/discover';


export default async function Home() {
  const session = await getServerSession(options)
  return (
    <main className="pt-6 flex flex-col min-h-screen items-center ">
      
      
      <div className='w-full py-10 popclapboard min-h-[90vh] flex flex-col md:flex-row justify-center border-y border-black items-center'>
        
        <div className='md:w-2/5 mx-auto md:mb-0 mb-6 text-center'>
          <Discover />
        </div>

        <PostForm/>
      </div>
      <div className='w-full min-h-screen py-10 reel flex flex-col md:flex-row justify-center border-y border-black items-center'>
        <Movies />
      </div>

      
      
      
    </main>
  );
}
