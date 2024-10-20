import React from 'react';
import '../index.css';

const Projects = () => {
    return (
        <section id="projects" className="section py-8 w-full max-w-4xl mx-auto text-center">
            <div className="mt-16 mb-32">
                <h2 className="text-4xl font-bold mb-4">My Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-xl font-semibold mb-2">Proyecto 1</h3>
                        <img src="./assets/top-promo.jpg" alt="Proyecto 1" className="w-full h-48 object-cover mb-2 rounded-md" />
                        <p className="mb-2">First work completed. It was about making a copy of an existing web page and creating a detail page for it, I chose Gladiator, you can redirect from the same website. I have used HTML and CSS.</p>
                        <a href="https://driazzt.github.io/ProyectoWEB/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Click Me</a>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-xl font-semibold mb-2">Proyecto 2</h3>
                        <img src="./assets/top-promo.jpg" alt="Proyecto 2" className="w-full h-48 object-cover mb-2 rounded-md" />
                        <p className="mb-2">Descripción del proyecto 2.</p>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Click Me</a>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-xl font-semibold mb-2">Proyecto 3</h3>
                        <img src="./assets/top-promo.jpg" alt="Proyecto 3" className="w-full h-48 object-cover mb-2 rounded-md" />
                        <p className="mb-2">Descripción del proyecto 3.</p>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Click Me</a>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-xl font-semibold mb-2">Proyecto 1</h3>
                        <img src="./assets/top-promo.jpg" alt="Proyecto 1" className="w-full h-48 object-cover mb-2 rounded-md" />
                        <p className="mb-2">First work completed. It was about making a copy of an existing web page and creating a detail page for it, I chose Gladiator, you can redirect from the same website. I have used HTML and CSS.</p>
                        <a href="https://driazzt.github.io/ProyectoWEB/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Click Me</a>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-xl font-semibold mb-2">Proyecto 2</h3>
                        <img src="./assets/top-promo.jpg" alt="Proyecto 2" className="w-full h-48 object-cover mb-2 rounded-md" />
                        <p className="mb-2">Descripción del proyecto 2.</p>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Click Me</a>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-xl font-semibold mb-2">Proyecto 3</h3>
                        <img src="./assets/top-promo.jpg" alt="Proyecto 3" className="w-full h-48 object-cover mb-2 rounded-md" />
                        <p className="mb-2">Descripción del proyecto 3.</p>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Click Me</a>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-xl font-semibold mb-2">Proyecto 1</h3>
                        <img src="./assets/top-promo.jpg" alt="Proyecto 1" className="w-full h-48 object-cover mb-2 rounded-md" />
                        <p className="mb-2">First work completed. It was about making a copy of an existing web page and creating a detail page for it, I chose Gladiator, you can redirect from the same website. I have used HTML and CSS.</p>
                        <a href="https://driazzt.github.io/ProyectoWEB/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Click Me</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;