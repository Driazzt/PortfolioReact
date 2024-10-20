import React from 'react';

const AboutMe = () => {
    return (
        <section id="about" className="section py-8 w-full max-w-4xl mx-auto text-center">
            <div className="mt-16">
                <h2 className="text-4xl font-bold mb-4">About Me</h2>
                <div className="flex flex-col items-center">
                    <img src="/assets/pixelcut-exportv1.png" alt="Profile" className="w-1/2 mb-4 rounded-full" />
                    <p className="text-center mt-4">
                        After many changes of pace, passing through the art world, I have always wanted to be part of it in one way or another. Either through the main or secondary branches. A while ago I opted for programming and now I have finished a Full Stack Web Development bootcamp.
                    </p>
                    <p className="text-center mt-4">
                        Currently, I am working as a Full Stack Developer, specializing in backend development at Grupo Vértice. I am working with JavaScript, MongoDB, Node.js, PostgreSQL, ThunderClient, Jest, Swagger, among many other libraries.
                    </p>
                    <p className="text-center mt-4">
                        Highlighting: HTML, CSS, SASS, Tailwind, JavaScript, TypeScript, React, Next.js, Node.js, MySQL, PostgreSQL, MongoDB.
                    </p>
                    <p className="text-center mt-4">
                        I am passionate about creating interactive and dynamic user experiences. I am always eager to learn new technologies and improve my skills.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;