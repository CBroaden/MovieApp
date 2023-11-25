

export default function CreateAccount() {

    return(
        <div className="h-screen bg-gradient-to-b from-slate-500 to-slate-800 pt-10">
            <div className="w-72 bg-slate-300 p-4 mx-auto rounded-xl border-black border-2">
                
                <h1 className="text-center text-2xl font-black">Create Account</h1>
                
                <form className="mt-6 mb-2 w-full" action='/createaccount/api'>
                    <label className="" htmlFor='username' >Username</label><br/>
                    <input className='pl-1 mb-1 rounded' type="text" id="username" name="username"></input><br/>

                    <label className="" htmlFor='password'>Password</label><br/>
                    <input className='pl-1 mb-1 rounded' type="password" id="password" name="password"></input><br/>

                    <label className="" htmlFor='pconfirm'>Confirm Password</label><br/>
                    <input className='pl-1 mb-6 rounded' type="password" id="pconfirm" name="pconfirm"></input><br/>
                    
                    <div className='w-full text-center'>
                        <input className="btn w-[45%] " type="submit" value="Submit"></input>
                    </div>
                </form>
                
            </div>
        </div>
    )
}