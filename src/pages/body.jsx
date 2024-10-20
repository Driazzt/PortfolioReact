import React from 'react';
import '../index.css';

const Body = () => {
    return (
        <main className="flex-grow flex flex-col items-center justify-center text-center px-4 mt-16">
            <section id="home" className="section py-8 w-full max-w-4xl">
                <div className="home-content">
                    <h1 className="myName text-4xl font-bold mb-4">Hi, I'm Héctor</h1>
                    <h3 className="text-2xl mb-4">Full Stack Developer</h3>
                    <p className="mb-4">
                        I am a web developer based in Malaga, Spain. I recently completed an intensive bootcamp to become a Full Stack Web Developer. I have a strong foundation in HTML, CSS, and JavaScript, and I am proficient in modern frameworks and libraries such as React and Node.js. My skills also include working with databases like MySQL and MongoDB, as well as using version control systems like Git. I am passionate about creating efficient, scalable, and user-friendly web applications. I am always eager to learn new technologies and improve my skills to stay current in the ever-evolving field of web development.
                    </p>
                    <div className="btn-box flex justify-center space-x-4">
                        <a href="/assets/CV%20HECTOR%20MARISCAL%20ESPA%C3%91OL%202024.pdf" target="_blank" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Hire Me</a>
                        <a href="contact" className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700">Let's talk</a>
                    </div>
                </div>
                <div className="svg-icons flex justify-center space-x-4 mt-4">
                    <a href="https://x.com/hectormm96" target="_blank" className="text-white hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/h%C3%A9ctor-mariscal-manzano-125b53195/" target="_blank" className="text-white hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <circle cx="4.983" cy="5.009" r="2.188"></circle>
                            <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                        </svg>
                    </a>
                    <a href="https://github.com/Driazzt" target="_blank" className="text-white hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
                        </svg>
                    </a>
                    <a href="mailto:mariscalmanzanohector@gmail.com" target="_blank" className="text-white hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path>
                        </svg>
                    </a>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/assets/pixelcut-exportv1.png" alt="Profile" className="w-1/2 mb-4" />
                </div>
            </section>
        </main>
    );
};

export default Body;