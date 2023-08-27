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
        <header className='w-full fixed top-0 z-10 bg-white'>
            <nav className='mx-auto flex justify-center shadow-lg sm:px-16 px-6 py-4'>
                {/* Desktop Menu */}
                <div className='hidden lg:block'>
                    <div className="grid grid-rows-2 grid-flow-col">
                        <div className='grid content-center row-span-2 mr-20'>
                            <Image src={Logo} alt="logo" className={`object-contain justify-end duration-300  ${isScrolled ? 'w-40' : 'w-64'}`} />
                        </div>
                        
                        <div className="text-[0.85rem] font-light flex gap-12">
                            <span>📞 <Link href={'#'} scroll={false} legacyBehavior>021-42167000</Link></span>
                            <span>✉ <Link href={'#'} scroll={false} legacyBehavior>info@arami-co.com</Link></span>
                        </div>

                        <div className='fixed right-[20%]'>
                            <input 
                                type="search"
                                id="default-search"
                                class="w-48 h-6 text-xs text-gray-900 border border-gray-300"
                                // placeholder="Search Mockups, Logos..."
                            />
                        </div>
                    
                        <ul className="hidden lg:flex gap-10 text-[14px] font-light leading-[30px] z-[2]">
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
                
                    <div className="grid grid-cols-4 gap-4">
                        <div>01</div>
                        <div>02</div>
                        <div>03</div>
                        <div>04</div>
                        <div className="col-span-2">05</div>
                        <div className="col-span-2 flex justify-end">06</div>
                    </div>

                    {/* Logo */}
                    {/* <Link href="/#top" className="z-10">
                        <Image src={Logo} alt="logo" className="w-60 md:w-[90px] object-contain" />
                    </Link>
                    <Image src="/menu.svg" width={100} height={100} alt="menu" onClick={() => setNav(true)} className="w-[24px] h-[24px] object-contain" /> */}

                    {nav && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className={nav ? 'fixed right-0 top-0 w-[85%] z-20 h-full border-r border-r-gray-900 bg-[#000300] opacity-[85%]' : 'fixed right-[-100%]'}
                    >
                        <div onClick={() => setNav(false)} className="flex justify-end m-6">
                            <Link href="/">
                                <Image src="/close.svg" alt="close" className="w-[50px] h-[50px]" />
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