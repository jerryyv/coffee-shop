import Link from 'next/link'

interface MobileMenuProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = ({isOpen, setIsOpen}: MobileMenuProps) => {
    return (
        <div className={isOpen ? "opacity-100 top-0 fixed z-10 w-full h-full bg-gray-500 flex flex-col justify-center items-center transition-all duration-300 ease-in-out"
                        : "opacity-0 -top-full fixed z-10 w-full h-full bg-gray-500 flex flex-col justify-center items-center transition-all duration-300 ease-in-out"}
        >
            <button onClick={() => setIsOpen(false)} className="h-8 w-10 top-5 right-6 absolute hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
            <ul className="space-y-6 text-3xl">
                <li onClick={() => setIsOpen(false)} className="hover:text-white"><Link href='/'>Home</Link></li>
                <li onClick={() => setIsOpen(false)} className="hover:text-white"><Link href='/about'>About</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar