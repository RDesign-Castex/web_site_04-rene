import Link from "next/link"
const LoginPage = () => {
    return <>
        <section className="min-h-screen flex flex-col items-center justify-center">
            <form className="w-full mx-auto flex flex-col gap-5 md:w-1/2">
                <div className="mb-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Password</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Password" />
                </div>
                <div className="mb-3">
                    <button className="px-5 py-2 bg-blue-500 text-white rounded w-full ">Login</button>
                </div>
                <div className="mb-3 text-white">
                    <p>No tengo cuenta <Link href="/register">Sign Up</Link> </p>
                </div>
            </form>
        </section>

    </>
    
}

export default LoginPage