
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Users from './components/users'
import Movies from './components/movies';



export default function Home() {
  
  return (
    <main className="pt-16 flex flex-col min-h-screen bg-slate-400  items-center justify-between">
      <h1 className='text-3xl text-center font-bold mt-12'>Movie Recommendation App</h1>

      <Movies />
    </main>
  );
}
