import Image from 'next/image';
import Link from 'next/link'
import { useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react';

const Navbar = () => {
    const routes = [
        {name: "Home", link: "/"},
        {name: "work", link: "/work"},
        {name: "about", link: "/about"},
        {name: "contact", link: "/contact"}
    ]

    const [isOpen, setOpen] = useState(false)

    return (
        <header className="z-40  absolute top-0 left-0 w-screen py-4">
            <nav className=" flex  px-4 max-w-screen-2xl mx-auto justify-between w-full items-center">
                <div className="logo">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={90}
                        height={70}
                    />
                </div>
                <ul className={`${isOpen ? 'h-72' : 'h-0 md:h-auto'} 
                overflow-hidden transition-all 
                duration-300 ease-in-out 
                md:justify-start justify-center md:static absolute 
                items-center md:bg-transparent bg-primary md:w-auto
                w-full top-0 left-0 flex 
                md:space-x-10 md:space-y-0 
                md:flex-row flex-col space-y-6 
                font-sans font-bold text-lg 
                capitalize md:text-white text-black`}>
                  {routes.map((route, index) =>  <li onClick={e => setOpen(false)} key={`${index}-${route.name}`}>
                        <Link href={route.link}>{route.name}</Link>
                    </li>)} 
                  
                </ul>
                <div className="relative z-20 md:hidden">
                <Hamburger color="#fff" toggled={isOpen} toggle={setOpen} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar