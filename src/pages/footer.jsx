import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-4 fixed bottom-0 left-0 w-full">
            <div className="container mx-auto text-center px-4">
                <p>&copy; 2024 Porfolio Personal Hector Mariscal. Todos los derechos reservados.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://github.com/Driazzt" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">GitHub</a>
                    <a href="https://www.linkedin.com/in/h%C3%A9ctor-mariscal-manzano-125b53195/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;