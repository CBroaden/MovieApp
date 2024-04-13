import Link from "next/link";
import { getServerSession } from 'next-auth';
import { options } from "../api/auth/[...nextauth]/options";


export default async function Navbar() {

    

    const session = await getServerSession(options)
    
    

    return(
        <nav className="flex items-center w-full bg-main fixed top-0 z-10 h-16">
        <ul className="flex justify-around max-w-4xl mx-auto items-center font-semibold text-white w-full">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/posts">Posts</Link></li>
        {session ? (
          <>
            <li><Link href="/api/auth/signout">Sign Out</Link></li>
            {/*<li className="">
              <Image alt="User Profile Image" className="rounded-full border mx-auto border-black" src={session.user?.image!} width={30} height={30} />
              <h2 className="text-sm">{session.user?.name}</h2>
            </li>*/}
        </>
      ) : (
            <li><Link href="/api/auth/signin">Sign In</Link></li>
      )}

      <form action='/searchresults'>
        <input type="text" placeholder="Search Movies..." name="search" className="search w-32 sm:w-auto"></input>
      </form>

        </ul>
      </nav>
    )
}