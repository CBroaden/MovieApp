import Link from "next/link";


export default function Navbar() {


    return(
        <div className='w-full px-4 flex flex-row items-center h-12 bg-slate-600 fixed'>
            <Link href='/'>HOME</Link>
            <div className="ml-auto mr-2" >
                <Link className="mx-2" href='/login'>LOGIN</Link>
                <Link className="mx-2" href='/createaccount'>SIGN UP</Link>
            </div>
            
        </div>
    )
}