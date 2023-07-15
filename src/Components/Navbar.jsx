import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import Twitter, { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLinks = ({ href, title, className }) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark
            absolute left-0 -bottom-0.5 dark:bg-light
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'} `}>&nbsp;</span>
        </Link>
    )
}

const MobileLinks = ({ href, title, className, toggle }) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href)
    }

    return (
        <button onClick={handleClick} href={href} className={`${className} text-light dark:text-dark relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-light
            absolute left-0 -bottom-0.5 dark:bg-dark
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'} `}>&nbsp;</span>
        </button>
    )
}
const Navbar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen(!isOpen);
    }

    const handleClick = () => {
        setMode(mode === "light" ? "dark" : "light")
    }

    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative">
            <button onClick={handleMenu} className="flex-col items-center justify-center hidden lg:flex">
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-in-out block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-in-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-in-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    <CustomLinks href="/" title="Home" className='mr-4' />
                    <CustomLinks href="/about" className='mx-4' title="About" />
                    <CustomLinks href="/projects" className='ml-4' title="Projects" />
                </nav>
                <nav className="flex items-center justify-center flex-wrap">
                    <motion.a whileHover={{ y: -2 }} className="w-6 mx-3" whileTap={{ scale: 0.9 }} target={"_blank"} href="https://twitter.com/Ayushd175">
                        <TwitterIcon />
                    </motion.a>
                    <motion.a whileHover={{ y: -2 }} className="w-6 mx-3" whileTap={{ scale: 0.9 }} target={"_blank"} href="https://github.com/AyushDhimanIITR">
                        <GithubIcon />
                    </motion.a>
                    <motion.a whileHover={{ y: -2 }} className="w-6 ml-3" whileTap={{ scale: 0.9 }} target={"_blank"} href="https://www.linkedin.com/in/ayush-dhiman-8302b4227/">
                        <LinkedInIcon />
                    </motion.a>


                    <button onClick={handleClick} className={`ml-3 flex items-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"} `} >
                        {
                            mode === 'dark' ?
                                <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
                        }
                    </button>

                </nav>
            </div>

            {
                isOpen ?
                    <motion.div
                        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, opacity: 1 }}

                        className="min-w-[70vw] flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 justify-between 
            items-center bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
                        <nav className="flex flex-col items-center justify-center ">
                            <MobileLinks toggle={handleMenu} href="/" title="Homes" className='' />
                            <MobileLinks toggle={handleMenu} href="/about" className='' title="About" />
                            <MobileLinks toggle={handleMenu} href="/projects" className='' title="Projects" />
                        </nav>
                        <nav className="flex items-center justify-center flex-wrap mt-2 ">
                            <motion.a whileHover={{ y: -2 }} className="w-6 mr-3 sm:mx-1" whileTap={{ scale: 0.9 }} href="/">
                                <TwitterIcon />
                            </motion.a>
                            <motion.a whileHover={{ y: -2 }} className="w-6 mx-3 sm:mx-1" whileTap={{ scale: 0.9 }} href="/">
                                <GithubIcon className="bg-light rounded-full dark:bg-dark" />
                            </motion.a>
                            <motion.a whileHover={{ y: -2 }} className="w-6 ml-3 sm:mx-1" whileTap={{ scale: 0.9 }} href="/">
                                <LinkedInIcon />
                            </motion.a>


                            <button onClick={handleClick} className={`ml-3 flex items-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"} `} >
                                {
                                    mode === 'dark' ?
                                        <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
                                }
                            </button>

                        </nav>
                    </motion.div>
                    : null
            }
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    )
}

export default Navbar;