import Link from 'next/link'

interface MobileMenuProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = ({isOpen, setIsOpen}: MobileMenuProps) => {
    return (
        <div className={isOpen ? "opacity-100 top-0 fixed z-20 w-full h-full bg-gray-500 flex flex-col justify-center items-center transition-all duration-300 ease-in-out"
                        : "opacity-0 -top-full fixed z-10 w-full h-full bg-gray-500 flex flex-col justify-center items-center transition-all duration-300 ease-in-out"}
        >
            <button onClick={() => setIsOpen(false)} className="h-8 w-10 top-5 right-6 absolute hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
            <ul className="space-y-6 text-3xl">
                <li onClick={() => setIsOpen(false)} className="hover:text-white"><Link href='/'>Home</Link></li>
                <li onClick={() => setIsOpen(false)} className="hover:text-white"><Link href='/about'>About</Link></li>
            </ul>
            <a href='#' className="snipcart-checkout h-8 w-10 hover:text-white mt-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </a>
        </div>
    )
}

export default Sidebar