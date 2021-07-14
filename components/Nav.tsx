import logo from '../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import MobileMenu from './MobileMenu'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)

    return ( 
        <nav className="bg-white py-2 flex justify-center items-center">
            <div className="flex justify-between items-center w-full max-w-screen-2xl px-6">
                <Link href='/'>
                <Image src={logo} alt="logo" className="cursor-pointer"></Image>
                </Link>
                <div>
                    <ul className="hidden sm:flex space-x-2">
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/about'>About</Link></li>
                    </ul>
                    {/* hamburger menu icon for mobile screens */}
                    <button onClick={() => setIsOpen(true)} className="h-12 w-8 sm:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </button>
                </div>
            </div>
            {/* menu for mobile screens */}
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
       </nav>
    )
}

export default Nav
