import React, { useState, useEffect } from 'react';
import Logo from '../images/logo.png';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`w-full fixed z-10 ${scrolling ? 'bg-black opacity-90' : 'bg-transparent'}`}>
            <nav className='flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between'>
                <a href="/" className='flex items-center justify-center text-white text-lg cursor-pointer'>
                    <img src={Logo} alt="Logo" className='hidden md:block w-8 h-8 lg:w-14 lg:h-14' />
                    Recetti<span></span>
                </a>

                <ul className='hidden md:flex text-white gap-6'>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/#recipes">Explore</a>
                    </li>
                    <li>
                        <a href="/favorites">Favorites</a>
                    </li>
                </ul>

                <button className='block md:hidden text-white text-xl' onClick={() => setOpen(prev => !prev)}>
                    {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
                </button>
            </nav>
            <div className={`${open ? "flex" : "hidden"} bg-black flex-col w-full px-4 pt-16 pb-10 text-white gap-6 text-[14px]`}>
                <a href="/">Home</a>
                <a href="/#recipes">Recipes</a>
                <a href="/">Favorites</a>
            </div>
        </header>
    );
};

export default Navbar;
