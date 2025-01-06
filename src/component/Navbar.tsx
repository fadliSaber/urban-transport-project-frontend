import React from 'react';
import { Bus, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <a href='/' className="flex items-center">
                        <Bus className="h-8 w-8 text-blue-600" />
                        <span className="ml-2 text-xl font-bold text-gray-900">eTawsil</span>
                    </a>

                    <div className="hidden md:flex space-x-8">
                        <a href="/service" className="text-gray-700 hover:text-blue-600">Services</a>
                        <a href="/routes" className="text-gray-700 hover:text-blue-600">Routes</a>
                        <a href="/schedules" className="text-gray-700 hover:text-blue-600">Schedules</a>
                        <a href="/tracker" className="text-gray-700 hover:text-blue-600">Tracker</a>
                        <a href="/login" className="text-gray-700 hover:text-blue-600">Login</a>
                    </div>

                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
                        <a href="/service" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
                        <a href="/routes" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Routes</a>
                        <a href="/schedules" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Schedules</a>
                        <a href="/tracker" className="text-gray-700 hover:text-blue-600">Tracker</a>
                        <a href="/login" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Login</a>
                    </div>
                </div>
            )}
        </nav>
    );
}