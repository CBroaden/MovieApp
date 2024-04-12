
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Users from './components/users'
import Movies from './components/movies';
import UserCard from './components/usercard';
import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';
import PostForm from './components/postform';


export default async function Home() {
  const session = await getServerSession(options)
  return (
    <main className="pt-6 pb-10 flex flex-col min-h-screen items-center ">
      
      
      <div className='w-full py-10 popclapboard flex flex-col md:flex-row justify-center border-y border-black items-center'>
        
        <h1 className='md:w-2/5 mx-auto text-center'>
          PLACEHOLDER
        </h1>

        <PostForm/>
      </div>
      <div className='w-full py-10 reel flex flex-col md:flex-row justify-center border-y border-black items-center'>
        <Movies />
      </div>
      
      
      
    </main>
  );
}
