import logo from '../../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import MobileMenu from './MobileMenu'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)

    return ( 
        <nav className="bg-gray-100 py-2 flex items-center">
            <div className="flex justify-between items-center w-full mx-4 lg:mx-10">
                <Link href='/'>
                    <div className="cursor-pointer">
                        <Image src={logo} alt="logo"/>
                    </div>
                </Link>
                <div>
                    <div className="hidden sm:flex space-x-8 items-center">
                        <ul className="flex space-x-4 text-gray-700 text-lg">
                            <li className='hover:text-black'><Link href='/'>Home</Link></li>
                            <li className='hover:text-black'><Link href='/about'>About</Link></li>
                        </ul>
                        <a href='#' className='snipcart-checkout h-8 w-8 text-yellow-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                        </a>
                    </div>
                    {/* hamburger menu icon for mobile screens */}
                    <button onClick={() => setIsOpen(true)} className="h-12 w-8 sm:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
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