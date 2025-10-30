import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (

        <div
            className="relative min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-x-hidden"
            style={{ backgroundImage: "url('/images/hero-truck9.jpg')" }}
            id="Header"
        >
            {/* Full Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <Navbar />

            <div className="relative z-10 container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
                <h2 className="text-2xl sm:text-6xl md:text-[52px] inline-block max-w-4xl font-semibold pt-20 leading-tight">
                    Smart Transport Management for a Connected Fleet
                </h2>

                <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-200 decoration-amber-500">
                    Simplify logistics with real-time tracking, optimized routes, and automated reporting.
                    Manage your drivers, vehicles, and deliveries—all from one intuitive dashboard.
                </p>

                <div className="space-x-6 mt-16">
                    <a href="#Features" className="border border-white px-8 py-3 rounded hover:bg-white hover:text-black transition">
                        Explore Features
                    </a>
                    <a href="#Contact" className="bg-blue-500 px-8 py-3 rounded hover:bg-blue-600 transition">
                        Get Started
                    </a>
                </div>
            </div>
        </div>


    )
}

export default Header
