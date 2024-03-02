import Link from "next/link";
import { getServerSession } from 'next-auth';
import { options } from "../api/auth/[...nextauth]/options";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";


export default async function Navbar() {

    

    const session = await getServerSession(options)
    
    

    return(
        <nav className="flex items-center w-full bg-secondary h-[80px] ">
        <ul className="flex justify-between max-w-4xl mx-auto items-center text-xl font-semibold text-white w-full">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/posts">Posts</Link></li>
        {session ? (
          <>
            <li><Link href="/api/auth/signout">Sign Out</Link></li>
            <li className="">
              <Image alt="User Profile Image" className="rounded-full border mx-auto border-black" src={session.user?.image!} width={30} height={30} />
              <h2 className="text-sm">{session.user?.name}</h2>
            </li>
          </>
      ) : (
            <li><Link href="/api/auth/signin">Sign In</Link></li>
      )}
        </ul>
      </nav>
    )
}