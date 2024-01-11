

export default function SignIn() {

    return(
        <div className="h-screen bg-gradient-to-b from-slate-500 to-slate-800 pt-16">
            <div className="w-72 bg-slate-300 p-4 mx-auto rounded-xl border-black border-2">
                
                <h1 className="text-center text-2xl font-black">Login</h1>
                
                <form className="mt-6 mb-2 w-fit" action='/test'>
                    <label className="" htmlFor='username' >Username</label><br/>
                    <input className='pl-1 mb-1 rounded' type="text" id="username" name="username"></input><br/>

                    <label className="" htmlFor='password'>Password</label><br/>
                    <input className='pl-1 mb-4 rounded' type="password" id="password" name="password"></input><br/>

                    <input className="btn" type="submit" value="Submit"></input>
                </form>
                
            </div>
        </div>
    )
}