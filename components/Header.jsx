import React, { useState } from 'react';
import { BsSunFill, BsMoonStars, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs';

import Image from 'next/image'
import Link from 'next/link'

import useDarkMode from '../hooks/useDarkMode';
import OutlineLogo from '../public/images/white_logo.png';
import Logo from '../public/images/logo.png';
import Banner from '../public/images/banner.png';
import WhiteBanner from '../public/images/white_banner.png';

const NavLink = React.forwardRef(({ onClick, href, children, className}, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref} className={className}>
        {children}
      </a>
    )
})

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [colorTheme, setTheme] = useDarkMode();

    const handleMenu = () => {
        setShowMenu(!showMenu);
    }

    const handleTheme = () => {
        setTheme(colorTheme);
        console.log(colorTheme)
    }

    return (
        // Header starts here
        <div className='bg-white dark:bg-slate-800 p-4 md:py-10 md:px-20'>
            <header className="mx-auto container px-4 xl:px-0">
                <div className="flex items-center justify-between">
                    <Link href="/" passHref>
                        <NavLink className="w-36">
                            <Image className="object-cover" src={colorTheme === 'light' ? OutlineLogo : Logo} alt="Logo" />
                        </NavLink>
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
                            <ul className="flex md:flex text-3xl md:text-base lg:text-base lg:flex flex-col md:flex-row lg:flex-row justify-center items-center fixed md:relative lg:relative top-0 bottom-0 left-0 right-0 bg-white dark:bg-slate-800 z-20">
                                <li className="md:mr-8 lg:mr-10 flex items-center">
                                    <span className="text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-violet-300 pt-10 md:pt-0 cursor-pointer" >About</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='hidden md:flex justify-start sm:justify-start xl:justify-end'>
                        <Link href="/" passHref>
                            <NavLink className="p-4 text-gray-700 dark:text-violet-500">
                                <BsInstagram className='h-6 w-6' />
                            </NavLink>
                        </Link>
                        <Link href="/" passHref>
                            <NavLink className="p-4 text-gray-700 dark:text-violet-500">
                                <BsTwitter className='h-6 w-6' />
                            </NavLink>
                        </Link>
                        <Link href="/" passHref>
                            <NavLink className="p-4 text-gray-700 dark:text-violet-500">
                                <BsGithub className='h-6 w-6' />
                            </NavLink>
                        </Link>
                        <button 
                            onClick={handleTheme}
                            className='transition duration-150 ease-in-out bg-gray-600 hover:bg-gray-700 rounded-full text-yellow-300 px-5 py-2 text-sm'
                        >
                            {colorTheme === 'dark' ? <BsMoonStars /> : <BsSunFill /> }
                        </button>
                    </div>
                </div>
            </header>
            <section className="mt-8 sm:mt-24 lg:mt-56 mx-auto container py-12 lg:px-4 xl:px-0">
                <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row">
                    <div className="flex flex-col lg:w-6/12 md:w-6/12 px-4 lg:px-0 justify-center items-start">
                        <p className="text-2xl text-gray-800 dark:text-white font-light">Hello there! I’am <span className="text-indigo-700 dark:text-violet-700">Omar Montoya</span> and</p>
                        <h1 className="text-5xl sm:text-6xl md:text-4xl lg:text-6xl font-extrabold leading-tight text-gray-800 dark:text-white">I’ll Help You Build Your Dream</h1>
                        <p className="text-lg text-gray-600 font-light leading-relaxed pt-8 dark:text-white">In quo quaerimus, non provident, similique sunt in voluptate et inter argumentum conclusionemque. Tum dicere exorsus est et quasi architecto beatae vitae dicta sunt, explicabo nemo. Certe inquam, pertinax non emolumento</p>
                        <button 
                            className="bg-gradient-to-r from-indigo-500 via-indigo-400 to-blue-400 
                                        hover:from-indigo-600 hover:to-blue-400 p-5 text-white text-2xl flex items-center text-xl custom-foreground-color font-regular custom-border-bottom focus:outline-none rounded-xl mt-10 
                                        dark:bg-gradient-to-r dark:from-violet-500 dark:to-violet-900 dark:hover:from-violet-600 hover:to-violet-900">
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
                            <Image loading="lazy" className="w-3/5" src={WhiteBanner} alt="header image" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        // Header ends here
    )
}

export default Header;
