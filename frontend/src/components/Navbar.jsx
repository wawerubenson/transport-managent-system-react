import React, { useEffect, useState } from 'react'
import { Menu, X, User, Truck } from "lucide-react";
// import { assets } from '../assets/assets'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    // Pre
    useEffect(() => {
        if (showMobileMenu) {
            document.styleSheets.overflow = 'hidden'
        } else {
            document.styleSheets.overflow = 'auto'
        }
        return () => {
            document.styleSheets.overflow = 'auto';
        };
    }, [showMobileMenu])
    return (
        <div className='absolute top-0 left-0 w-full z-index-10 bg-[#1e3b8adc]'>

            <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent bor'>
                {/* <span className='text-[30px] text-blue-50'>Real Estate Portal</span> */}

                <div className="flex items-center space-x-3">
                    <img
                        src="/images/logo.jpg"
                        alt="Transport Portal Logo"
                        className="h-8 w-10 rounded-lg object-cover shadow-md"
                    />
                    <span className="text-2xl font-extrabold tracking-tight text-white">
                        Transport Portal
                    </span>
                </div>

                <ul className='hidden md:flex gap-7 text-white text-[18px]'>
                    <a href="#features" className="hover:text-cyan-200 transition-colors text-white">
                        Modules
                    </a>
                    <a href="#benefits" className="hover:text-cyan-200 transition-colors">
                        Why Us
                    </a>
                    <a href="#pricing" className="hover:text-cyan-200 transition-colors">
                        Pricing
                    </a>
                </ul>

                <a
                    href="/profile"
                    className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                    <User className="w-5 h-5" />
                </a>

                <img onClick={() => setShowMobileMenu(true)} src="/images/menu_icon.svg" className='md:hidden w-7 cursor-pointer' alt="" />
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                <div className='flex justify-end p-6 cursor-pointer'>
                    <img onClick={() => setShowMobileMenu(false)} src="/images/cross_icon.svg" className='w-6' alt="" />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <a onClick={() => setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block' href="#Header">Home</a>
                    <a onClick={() => setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block' href="#About">About</a>
                    <a onClick={() => setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block' href="#Projects">Projects</a>
                    <a onClick={() => setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block' href="#Testimonials">Testimonials</a>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
