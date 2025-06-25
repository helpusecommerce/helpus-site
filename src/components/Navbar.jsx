
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-blue-600">HelpUS</Link>
                <div className="space-x-4">
                    <Link to="/" className="hover:text-blue-800">Início</Link>
                    <Link to="/" className="hover:text-blue-800">Serviços</Link>
                    <Link to="/contato" className="hover:text-blue-800">Contato</Link>
                </div>
            </div>
        </nav>
    );
}
