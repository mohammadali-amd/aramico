"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';

import Logo from '../public/aramico-Logo.png'
import Image from 'next/image';

const links = [
  { name: 'News', slug: '#a' },
  { name: 'About Us', slug: '#b' },
  { name: 'Fieald of Work', slug: '#g' },
  { name: 'R&D', slug: '#d' },
  { name: 'Projects', slug: '#e' },
  { name: 'Career', slug: '#f' },
  { name: 'Contact Us', slug: '#c' },
];

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [isScrolled, setisScrolled] = useState(false);

    const changeStyle = () => {
        setisScrolled(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeStyle);
        return () => {
          window.removeEventListener('scroll', changeStyle);
        };
    }, []);

    return (
        <header className='w-full sticky top-0 z-10 bg-white'>
            <nav className='mx-auto flex justify-center shadow-lg sm:px-16 px-6 py-4'>
                {/* Desktop Menu */}
                <div className='hidden lg:block'>
                    <div className="grid grid-rows-2 grid-flow-col">
                        <div className='grid content-center row-span-2 mr-20'>
                            <Image src={Logo} alt="logo" className={`object-contain justify-end duration-300  ${isScrolled ? 'w-40' : 'w-64'}`} />
                        </div>
                        
                        <div className="text-[0.85rem] font-light">
                            <Link href={'#'} scroll={false} legacyBehavior>021-42167000</Link>
                            {/* <Link href={'#'} scroll={false} legacyBehavior>info@arami-co.com</Link> */}
                        </div>

                        <div className='fixed right-[20%]'>
                            icon
                        </div>
                    
                        <ul className="hidden lg:flex gap-16 text-[14px] font-light leading-[30px] z-[2]">
                            {links.map((item) => (
                            <li key={item.slug}>
                                <Link href={item.slug} scroll={false} legacyBehavior>{item.name}</Link>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            


                {/* Mobile Menu */}
                <div className="flex items-center mx-auto gap-[200px] lg:hidden z-[20]">
                    {/* Logo */}
                    <img src="/menu.svg" alt="menu" onClick={() => setNav(true)} className="w-[24px] h-[24px] object-contain" />
                    <Link href="/#top" className="z-10">
                    <img src="Logo.png" alt="logo" className="w-[60px] md:w-[90px] object-contain" />
                    </Link>
                    {nav && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className={nav ? 'fixed right-0 top-0 w-[85%] z-20 h-full border-r border-r-gray-900 bg-[#000300] opacity-[85%]' : 'fixed right-[-100%]'}
                    >
                        <div onClick={() => setNav(false)} className="flex justify-end m-6">
                        <Link href="/">
                            <img src="/close.svg" alt="close" className="w-[50px] h-[50px]" />
                        </Link>
                        </div>
                        <ul className="mt-6">
                        {links.map((item) => (
                            <Link key={item.slug} href={item.slug} scroll={false} legacyBehavior>
                            <li className="text-xl p-4 border-b border-gray-600 cursor-pointer" onClick={() => setNav(false)}>{item.name}</li>
                            </Link>
                        ))}
                        </ul>
                    </motion.div>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;