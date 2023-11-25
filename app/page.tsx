
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Users from './components/users'
import Movies from './components/movies';



export default function Home() {
  
  return (
    <main className="flex flex-col min-h-screen bg-slate-400  items-center justify-between p-14">
      <Users />
      <Movies />
    </main>
  );
}
