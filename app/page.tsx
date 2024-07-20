
import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';
import PostForm from './components/postform';
import SearchBar from './components/searchbar';
import { SiThemoviedatabase } from "react-icons/si";
import { FaUserCheck } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";


export default async function Home() {
  const session = await getServerSession(options)
  return (
    <main className="pt-6 flex flex-col min-h-screen items-center ">
      <h1 className='page-title '>Home</h1>
      <p className='bg-2 text-xl text-center mb-4 rounded-3xl px-4 py-2 shadow shadow-black font-medium'>Sign In, Create and View Posts, and Search Movies!</p>
      <PostForm/>
      <div className='[&>*]:mx-auto [&>*]:w-2/3 w-full bg-2 py-2 mb-2 px-4 shadow shadow-black rounded-xl'>
        <h1 className='text-xl font-bold text-center mb-4'>Find Movie</h1>
        <SearchBar/>
      </div>
      <div className='mx-auto w-full bg-2 py-2 mb-2 px-4 shadow shadow-black rounded-xl'>
        <h1 className='text-xl font-bold text-center mb-4'>Built With</h1>
        <ul className='flex flex-wrap justify-around gap-8 font-bold'>

          <li className='flex flex-col items-center'>
            <SiThemoviedatabase className='mx-auto text-blue-500 inline text-3xl mb-1'/>
            <h1 className=''>TheMovieDB</h1>
          </li>

          <li className='flex flex-col items-center'>
            <TbBrandNextjs className='mx-auto inline text-3xl mb-1 text-blue-500'/>
            <h1 className=''>NextJS</h1>
          </li>

          <li className='flex flex-col items-center'>
            <BiLogoPostgresql className='mx-auto text-blue-500 inline text-3xl mb-1'/>
            <h1 className=''>PostgreSQL</h1>
          </li>

          <li className='flex flex-col items-center'>
            <FaUserCheck className='mx-auto inline text-3xl mb-1 text-blue-500'/>
            <h1 className=''>OAuth | NextAuth</h1>
          </li>

        </ul>
      </div>
      
      
    </main>
  );
}
