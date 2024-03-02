
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
    <main className="pt-16 flex flex-col min-h-screen items-center justify-between">
      
      <PostForm/>
      <Movies />
      <h1 className='text-8xl text-center'>ELEMENT</h1>
      
    </main>
  );
}
