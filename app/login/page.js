'use client'
import { useState,useEffect } from "react"
import Link from "next/link"
import { toast } from "react-toastify";
const LoginPage = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const [isDisable, setIsDisable] = useState(true);

    const onChangeHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };

    useEffect(() => {
        if (user.email && user.password) {
            setIsDisable(false);
        } else {
            setIsDisable(true);
        }
    }, [user]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        try{
            toast.success("login suscces")
        } catch (e) {
            toast.error(e?.response?.data?.error)
        }
    }

    return <>
        <section className="min-h-screen flex flex-col items-center justify-center">
            <form onSubmit={onSubmitHandler} className="w-full mx-auto flex flex-col gap-5 md:w-1/2">
                <div className="mb-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="email" value={user.email} onChange={onChangeHandler} placeholder="Email" />
                </div>
                <div className="mb-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Password</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="password" value={user.password} onChange={onChangeHandler} placeholder="Password value=" />
                </div>
                <div className="mb-3">
                    <button disabled={isDisable} className="px-5 py-2 bg-blue-500 text-white rounded w-full disabled:bg-gray-300 ">Login</button>
                </div>
                <div className="text-center mb-3 text-white">
                    <p>No tengo cuenta <Link className="font-bold " href="/register">Sign Up</Link> </p>
                </div>
            </form>
        </section>

    </>
    
}

export default LoginPage