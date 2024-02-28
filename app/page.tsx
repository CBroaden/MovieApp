
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
    <main className="pt-16 flex flex-col min-h-screen  items-center justify-between">
      
      {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
        <h1 className="text-xl text-center text-red-900 font-semibold">
        You are Not Authenticated !!!
      </h1>
      )}
      <h1 className='text-3xl text-center font-bold mt-12'>Movie Recommendation App</h1>
      <PostForm/>
      <Movies />
    </main>
  );
}
