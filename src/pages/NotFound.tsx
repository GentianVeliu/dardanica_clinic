// src/pages/NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
    <div className="min-h-screen flex items-center justify-center bg-[#0B2944] text-white px-4">
        <div className="text-center space-y-6">
            <h1 className="text-7xl font-extrabold">404</h1>
            <p className="text-2xl">Faqja nuk u gjend</p>
            <Link
                to="/"
                className="inline-block bg-gradient-to-r from-[#FEFE98] to-[#D3A54B] text-[#0B2944] font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
                Kthehu te Faqja Kryesore
            </Link>
        </div>
    </div>
);

export default NotFound;
