import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/nav-logo.png';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();
    const links = [
        { to: '/', label: 'Home' },
        { to: '/dermatologji', label: 'Dermatologji' },
        { to: '/stomatologji', label: 'Stomatologji' },
        { to: '/estetika', label: 'Estetika' },
        { to: '/kontakt', label: 'Kontakt' },
    ];

    return (
        <nav className="bg-[#081f33] shadow-lg px-4 sm:px-6 lg:px-8 sticky top-0 z-50">
            <div className="container mx-auto py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2 hover:opacity-90">
                    <img src={logo} alt="Dardanica Clinic Logo" className="h-8 md:h-10 w-auto" />
                    <span className="sr-only">Dardanica Clinic</span>
                </Link>

                {/* Mobile toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-[#FEFE98] hover:text-white focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Menu items */}
                <ul
                    className={`absolute md:static top-full left-0 w-full md:w-auto bg-[#0B2944] md:bg-transparent backdrop-blur-lg md:backdrop-blur-0 md:flex md:items-center md:justify-end transition-all ${isOpen ? 'block' : 'hidden'}`}
                >
                    {links.map(({ to, label }) => {
                        const isActive = pathname === to;
                        return (
                            <li key={to} className="md:mx-1">
                                <Link
                                    to={to}
                                    onClick={() => setIsOpen(false)}
                                    className={`block text-center md:text-left text-sm md:text-base px-3 md:px-4 py-2 rounded-full transition-colors duration-200
                    ${isActive
                                            ? 'bg-gradient-to-r from-[#FEFE98] to-[#D3A54B] text-[#0B2944]'
                                            : 'text-[#FEFE98] hover:bg-gradient-to-r hover:from-[#FEFE98] hover:to-[#D3A54B] hover:text-[#0B2944]'}
                  `}
                                >
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;