'use client';
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Home() {

  const router = useRouter();

  const onLogoutHandler = async () => {
    router.push("/login")
  }

  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center">
        <h1>username: <span className='font-bold text-2xl'>René</span> </h1>
        <h1>email: <span className='font-bold text-2xl'>djkuhm@gmail.com</span> </h1>
        <div>
          <button onClick={onLogoutHandler} className='px-5 py-2 text-white bg-blue-500 rounded'>Logout</button>
        </div>
        
      </section>
    </>
    
  )
}
