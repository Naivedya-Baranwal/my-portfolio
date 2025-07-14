'use client'
import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import { ThemeToggle } from './ThemeProvider';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const pathname = usePathname();
    const isHome = pathname === '/';
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <nav className='flex z-50 lg:w-4/5 w-full ml-0 justify-between py-5 px-4 lg:px-12 lg:ml-35  text-xl lg:text-2xl fixed bg-transparent backdrop-blur-2xl lg:rounded-3xl'>
                <div>Naivedya</div>

                {/* Desktop Navigation */}
                <div className='hidden lg:flex gap-x-6'>
                    {isHome ? (
                        <>
                            <ScrollLink to="home" smooth={true} duration={500} offset={-110} className="cursor-pointer">Home</ScrollLink>
                            <ScrollLink to="about" smooth={true} duration={500} offset={-110} className="cursor-pointer">About</ScrollLink>
                            <ScrollLink to="skills" smooth={true} duration={500} offset={-100} className="cursor-pointer">Skills</ScrollLink>
                            <ScrollLink to="DsaProgress" smooth={true} duration={500} offset={-80} className="cursor-pointer">DSA Stats</ScrollLink>
                            <ScrollLink to="projects" smooth={true} duration={500} offset={-100} className="cursor-pointer">Projects</ScrollLink>
                            <ScrollLink to="experience" smooth={true} duration={500} offset={-100} className="cursor-pointer">Experience</ScrollLink>
                        </>
                    ) : (
                        <>
                            <NextLink href="/#home">Home</NextLink>
                            <NextLink href="/#about">About</NextLink>
                            <NextLink href="/#skills">Skills</NextLink>
                            <NextLink href="/#DsaProgress">DSA Stats</NextLink>
                            <NextLink href="/projects">Projects</NextLink>
                            <NextLink href="/#experience">Experience</NextLink>
                        </>
                    )}
                </div>

                <div className="hidden lg:flex items-center gap-4">
                    {isHome ? (
                        <ScrollLink to="contact" smooth={true} duration={500} offset={-100} className="cursor-pointer">Contact Me</ScrollLink>
                    ) : (
                        <NextLink href="/#contact">Contact</NextLink>
                    )}
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden items-center gap-2">
                    <ThemeToggle />
                    <button
                        onClick={toggleMenu}
                        className="p-2 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-40 pt-20 bg-white dark:bg-[rgb(17,0,31)] bg-opacity-95 dark:bg-opacity-95">
                    <div className="flex flex-col items-center gap-y-6 text-xl pt-8">
                        {isHome ? (
                            <>
                                <ScrollLink
                                    to="home"
                                    smooth={true}
                                    duration={500}
                                    offset={-110}
                                    className="cursor-pointer"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </ScrollLink>
                                <ScrollLink
                                    to="about"
                                    smooth={true}
                                    duration={500}
                                    offset={-110}
                                    className="cursor-pointer"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About
                                </ScrollLink>
                                <ScrollLink
                                    to="skills"
                                    smooth={true}
                                    duration={500}
                                    offset={-100}
                                    className="cursor-pointer"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Skills
                                </ScrollLink>
                                <ScrollLink
                                    to="DsaProgress"
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    className="cursor-pointer"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    DSA Stats
                                </ScrollLink>
                                <ScrollLink
                                    to="projects"
                                    smooth={true}
                                    duration={500}
                                    offset={-100}
                                    className="cursor-pointer"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Projects
                                </ScrollLink>
                                <ScrollLink
                                    to="experience"
                                    smooth={true}
                                    duration={500}
                                    offset={-100}
                                    className="cursor-pointer"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Experience
                                </ScrollLink>
                                <ScrollLink
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    offset={-100}
                                    className="cursor-pointer"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact Me
                                </ScrollLink>
                            </>
                        ) : (
                            <>
                                <NextLink href="/#home" onClick={() => setIsMenuOpen(false)}>Home</NextLink>
                                <NextLink href="/#about" onClick={() => setIsMenuOpen(false)}>About</NextLink>
                                <NextLink href="/#skills" onClick={() => setIsMenuOpen(false)}>Skills</NextLink>
                                <NextLink href="/#DsaProgress" onClick={() => setIsMenuOpen(false)}>DSA Stats</NextLink>
                                <NextLink href="/projects" onClick={() => setIsMenuOpen(false)}>Projects</NextLink>
                                <NextLink href="/#experience" onClick={() => setIsMenuOpen(false)}>Experience</NextLink>
                                <NextLink href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</NextLink>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar