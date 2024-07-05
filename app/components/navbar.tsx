import Link from "next/link";
import { getServerSession } from 'next-auth';
import { options } from "../api/auth/[...nextauth]/options";
import { FaSignInAlt, FaSignOutAlt, FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { MdOutlinePostAdd } from "react-icons/md";
import toggleSidebar from "../functions/toggleSidebar";
import Hamburger from "./hamburger";



export default async function Navbar() {

    

    const session = await getServerSession(options)
    

    return(
        <nav  id="sidebar" className="h-full md:w-[25%] hidden w-full bg-white text-center md:text-left z-20 px-4 text-xl font-bold md:flex flex-col fixed p-2 border-r border-black">
  
          <div className="h-1/4 flex flex-col justify-between p-2 mt-2 ml-4">
            <h1 className=" "><Link href="/" className="hover:underline"><FaHome className="inline text-xl mb-1"/> TheMovieX</Link></h1>
            <h1 className=" "><Link href="/posts" className="hover:underline"><MdOutlinePostAdd className="inline mb-1" /> Posts</Link></h1>
            {session ? (
              <>
                <h1 className=""><Link href="/api/auth/signout" className="hover:underline"><FaSignOutAlt className="inline mb-1" /> Sign Out</Link></h1>
                {/*<li className="">
                  <Image alt="User Profile Image" className="rounded-full border mx-auto border-black" src={session.user?.image!} width={30} height={30} />
                  <h2 className="text-sm">{session.user?.name}</h2>
                </li>*/}
            </>
          ) : (
                <h1 className=""><Link href="/api/auth/signin" className="hover:underline"><FaSignInAlt className="inline mb-1" /> Sign In</Link></h1>
          )}
        </div>
      </nav>
    )
}