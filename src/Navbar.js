import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800">
            <div className="container mx-auto px-4 py-2">
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-white font-bold text-xl">Logo</Link>
                    <div className="space-x-4">
                        <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                        <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
                        <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
