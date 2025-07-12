'use client'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';

const Navbar = () => {
    const pathname = usePathname();
    const isHome = pathname === '/';
    return (
        <div>
            <nav className='flex z-5 w-full justify-between py-5 px-12 ml-25 text-2xl fixed  bg-transparent'>
                {isHome ? (
                    <>
                    <div >Naivedya</div>
                        <div className='flex gap-x-6'>
                            <ScrollLink to="home" smooth={true} duration={500} offset={-110} className="cursor-pointer">Home</ScrollLink>
                            <ScrollLink to="about" smooth={true} duration={500} offset={-110} className="cursor-pointer">About</ScrollLink>
                            <ScrollLink to="skills" smooth={true} duration={500} offset={-100} className="cursor-pointer">Skills</ScrollLink>
                            <ScrollLink to="DsaProgress" smooth={true} duration={500} offset={-80} className="cursor-pointer">DSA Stats</ScrollLink>
                            <ScrollLink to="projects" smooth={true} duration={500} offset={-100} className="cursor-pointer">Projects</ScrollLink>
                            <ScrollLink to="experience" smooth={true} duration={500} offset={-100} className="cursor-pointer">Experience</ScrollLink>
                        </div>
                        <div >
                            <ScrollLink to="contact" smooth={true} duration={500} offset={-100} className="cursor-pointer">Contact Me</ScrollLink>
                        </div>
                    </>
                ) : (
                    <>
                     <div >Naivedya</div>
                        <div className='flex gap-x-6'>
                            <NextLink href="/#home">Home</NextLink>
                            <NextLink href="/#about">About</NextLink>
                            <NextLink href="/#skills">Skills</NextLink>
                            <NextLink href="/#DsaProgress">DSA Stats</NextLink>
                            <NextLink href="/projects">Projects</NextLink>
                            <NextLink href="/#experience">Experience</NextLink>
                        </div>
                        <div>
                            <NextLink href="/#contact">Contact</NextLink>
                        </div>
                    </>
                )}
                <div/>
            </nav>
        </div>
    )
}

export default Navbar



