'use client'

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
    const { data: session } = useSession()
    const [providers,setProviders] = useState(null)
    const [toggleDropdown, setToggleDropdown] = useState(false)

    useEffect(() => {
        (async () => {
          const res = await getProviders();
          setProviders(res);
        })();
      }, []);
  return (
    <nav className="flex-between w-full mt-5 mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
            {/* <Image key='logo' src="/assets/images/logo.png" alt="Prompty Logo" width={30} height={30} className="object-contain" /> */}
            <Image key='logo' src="/assets/images/prompty.png" alt="Prompty Logo" width={30} height={30} className="object-contain" />
            <p className="logo_text">Prompty</p>
        </Link>

        {/* Desktop Navigation */}
        <div className="sm:flex hidden">
            {session?.user?
            (
                <div className="flex gap-3 md:gap-5">
                    <Link href="/create-prompt" className="purple_btn">Create Prompt</Link>
                    <button type="button" onClick={signOut} className="outline_btn">Sign Out</button>
                    <Link href="/profile">
                        <Image src={session?.user.image} width={37} height={37} className="rounded-full" alt="Profile-Icon" />
                    </Link>
                </div>
            )
            :
            (
                <>
                    {providers && Object.values(providers).map((provider) => (
                            <button type='button' key={provider.name}
                                onClick={() => {
                                    signIn(provider.id);
                                }}
                                className='purple_btn'
                            >
                                Sign in
                            </button>
                        ))}
                </>
            )
            }
        </div>
        {/* {alert(session?.user)} */}

        {/* Mobile Navigation */}
        <div className="sm:hidden flex relative">
            {session?.user?
                (
                    <div className="flex">
                        <Image src={session?.user.image} width={37} height={37} className="rounded-full" alt="Profile-Icon" onClick={() => setToggleDropdown((prev) => !prev)} />
                        {toggleDropdown && (
                            <div className="dropdown">
                                <Link href="/profile" className="dropdown_link" onClick={() => setToggleDropdown(false)}>
                                    My Profile
                                </Link>
                                <Link href="/create-prompt" className="dropdown_link" onClick={() => setToggleDropdown(false)}>
                                    Create Prompt
                                </Link>
                                <button
                                type="button"
                                onClick={() => {setToggleDropdown(false); signOut();}}
                                className="w-full purple_btn">Sign Out</button>
                            </div>
                        )}
                    </div>
                )
                :
                (
                    <>
                        {providers && Object.values(providers).map((provider) => (
                            <button type='button' key={provider.name}
                                onClick={() => {
                                    signIn(provider.id);
                                }}
                                className='purple_btn'
                            >
                                Sign in
                            </button>
                        ))}
                    </>
                )
            }
        </div>
    </nav>
  )
}

export default Nav