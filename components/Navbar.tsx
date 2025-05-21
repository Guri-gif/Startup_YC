import { auth } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SignIn from './signin'
import Signout from './Signout'

const Navbar = async () => {

    const session = await auth()
    return (
        <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
            <nav className='flex justify-between items-center'>
                <Link href='/'>
                    <Image src='/logo.png' alt='Logo' width={144} height={3} />
                </Link>
                <div className='flex gap-5 items-center'>
                    {session && session?.user ? (
                        <>
                            <Link href='/startup/create'> <span className='font-medium text-[16px] bg-[#FFE8F0] px-4 py-2 rounded-full'>Create</span></Link>
                            <Signout />
                            <Link href={`/user/${session?.user?.id}`}><span>{session?.user?.name}</span></Link>
                        </>
                    ) : (
                        <SignIn />
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar
