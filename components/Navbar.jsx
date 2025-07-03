'use client'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';

const Navbar = () => {
    const pathname = usePathname();
    const isHome = pathname === '/';
    return (
        <div className=''>
            <nav className='flex z-5 justify-between py-8 px-12  text-2xl fixed w-full'>
                <div>Naivedya</div>
                {isHome ? (
                    <>
                        <div className='flex gap-x-6'>
                            <ScrollLink to="about" smooth={true} duration={500} offset={-110} className="cursor-pointer">About</ScrollLink>
                            <ScrollLink to="skills" smooth={true} duration={500} offset={-100} className="cursor-pointer">Skills</ScrollLink>
                            <ScrollLink to="DsaProgress" smooth={true} duration={500} offset={-100} className="cursor-pointer">DSA Stats</ScrollLink>
                            <ScrollLink to="projects" smooth={true} duration={500} offset={-100} className="cursor-pointer">Projects</ScrollLink>
                        </div>
                        <div>
                            <ScrollLink to="contact" smooth={true} duration={500} offset={-100} className="cursor-pointer">Contact Me</ScrollLink>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='flex gap-x-6'>
                            <NextLink href="/#about">About</NextLink>
                            <NextLink href="/#skills">Skills</NextLink>
                            <NextLink href="/#DsaProgress">DSA Stats</NextLink>
                            <NextLink href="/projects">Projects</NextLink>
                        </div>
                        <div>
                            <NextLink href="/#contact">Contact</NextLink>
                        </div>
                    </>
                )}
            </nav>
        </div>
    )
}

export default Navbar



