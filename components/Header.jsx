import React, { useState } from 'react';

import Image from 'next/image'
import Link from 'next/link'

import OutlineLogo from '../public/images/white_logo_outline.png';
import Logo from '../public/images/logo.png';
import Banner from '../public/images/banner.png';

const NavLink = React.forwardRef(({ onClick, href, children, className}, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref} className={className}>
        {children}
      </a>
    )
})

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        // Header starts here
        <div className='bg-white p-4 md:py-10 md:px-20'>
            <header className="mx-auto container px-4 xl:px-0">
                <div className="flex items-center justify-between">
                    <Link href="/" passHref>
                        <NavLink className="w-36"><Image className="object-cover" src={Logo} alt="Logo" /></NavLink>
                    </Link>
                    <div className="">
                        <div onClick={handleMenu} className="sm:block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="4" y1="6" x2="20" y2="6" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="18" x2="20" y2="18" />
                            </svg>
                        </div>
                        <div id="menu" className={`md:block lg:block ${showMenu ? '' : 'hidden'} `}>
                            <div onClick={handleMenu} className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none z-30 top-0 pt-4">
                                <svg aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <ul className="flex md:flex text-3xl md:text-base lg:text-base lg:flex flex-col md:flex-row lg:flex-row justify-center items-center fixed md:relative lg:relative top-0 bottom-0 left-0 right-0 bg-white z-20">
                                <li className="md:mr-8 lg:mr-10 flex items-center">
                                    <span className="text-gray-800 hover:text-gray-600 pt-10 md:pt-0 cursor-pointer" >About</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='hidden md:flex justify-start sm:justify-start xl:justify-end'>
                        <Link href="/" passHref>
                            <NavLink className="p-4 stroke-indigo-500 hover:stroke-indigo-300">
                                <svg aria-label="Instagram" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </NavLink>
                        </Link>
                        <Link href="/" passHref>
                            <NavLink className="p-4 stroke-indigo-500 hover:stroke-indigo-300">
                                <svg aria-label="Twitter" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                </svg>
                            </NavLink>
                        </Link>
                        <Link href="/" passHref>
                            <NavLink className="p-4 stroke-indigo-500 hover:stroke-indigo-300">
                                <svg aria-label="Dribble" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dribbble" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx={12} cy={12} r={9} />
                                    <path d="M9 3.6c5 6 7 10.5 7.5 16.2" />
                                    <path d="M6.4 19c3.5-3.5 6-6.5 14.5-6.4" />
                                    <path d="M3.1 10.75c5 0 9.814-.38 15.314-5" />
                                </svg>
                            </NavLink>
                        </Link>
                    </div>
                </div>
            </header>
            <section className="mt-8 sm:mt-24 lg:mt-56 mx-auto container py-12 lg:px-4 xl:px-0 mx-auto container ">
                <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row">
                    <div className="flex flex-col lg:w-6/12 md:w-6/12 px-4 lg:px-0 justify-center items-start">
                        <p className="text-2xl text-gray-800 font-light">Hello there! I’am <span className="text-indigo-700">Omar Montoya</span> and</p>
                        <h1 className="text-5xl sm:text-6xl md:text-4xl lg:text-6xl font-extrabold leading-tight text-gray-800">I’ll Help You Build Your Dream</h1>
                        <p className="text-lg text-gray-600 font-light leading-relaxed pt-8">In quo quaerimus, non provident, similique sunt in voluptate et inter argumentum conclusionemque. Tum dicere exorsus est et quasi architecto beatae vitae dicta sunt, explicabo nemo. Certe inquam, pertinax non emolumento</p>
                        <button className="bg-gradient-to-r from-indigo-500 via-indigo-400 to-blue-400 hover:from-indigo-600 hover:to-blue-400 p-5 text-white text-2xl flex items-center text-xl custom-foreground-color font-regular custom-border-bottom focus:outline-none rounded-xl mt-10">
                            Connect with me
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <line x1="15" y1="16" x2="19" y2="12" />
                                <line x1="15" y1="8" x2="19" y2="12" />
                            </svg>
                        </button>
                    </div>
                    <div className="xl-w-11/12 sm:w-1/2 mt-8 sm:mt-0">
                        <div className="flex items-center justify-center sm:justify-end w-full">
                            <Image loading="lazy" className="w-3/5" src={Banner} alt="header image" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        // Header ends here
    )
}

export default Header;
