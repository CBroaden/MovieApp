import Link from "next/link";
import { getServerSession } from 'next-auth';
import { options } from "../api/auth/[...nextauth]/options";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";


export default async function Navbar() {

    

    const session = await getServerSession(options)
    
    

    return(
        <nav className="flex items-center w-full bg-gray-700 h-[80px] ">
        <ul className="flex justify-evenly items-center text-xl font-semibold text-white w-full">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/posts">Posts</Link></li>
                <li><Link href="/server">Server</Link></li>
                <li><Link href="/client">Client</Link></li>
                <li><Link href="/extra">Extra</Link></li>
        
        {session ? (
          <>
            <li><Link href="/api/auth/signout">Sign Out</Link></li>
            <li>
              <Image alt="User Profile Image" className="rounded-full border border-black" src={session.user?.image!} width={30} height={30} />
            </li>
          </>
      ) : (
        <li><Link href="/api/auth/signin">Sign In</Link></li>
      
      )}
      </ul>
      </nav>
    )
}