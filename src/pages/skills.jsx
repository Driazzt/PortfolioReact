import React from 'react';
import '../index.css';

const Skills = () => {
    const skills = [
        { name: 'React', percentage: 90 },
        { name: 'HTML', percentage: 90 },
        { name: 'MongoDB', percentage: 90 },
        { name: 'Node.js', percentage: 85 },
        { name: 'CSS', percentage: 80 },
        { name: 'JavaScript', percentage: 80 },
        { name: 'PostgreSQL', percentage: 75 },
        { name: 'SASS', percentage: 70 },
        { name: 'Tailwind', percentage: 70 },
        { name: 'TypeScript', percentage: 70 },
        { name: 'Next.js', percentage: 70 },
        { name: 'MySQL', percentage: 70 },
    ];

    return (
        <section id="skills" className="section py-8 w-full max-w-4xl mx-auto text-center">
            <div className="mt-16">
                <h2 className="text-4xl font-bold mb-4">Skills</h2>
                <br />
                <div className="space-y-4">
                    {skills.map((skill, index) => (
                        <div key={index} className="w-full bg-gray-200 rounded-full h-6">
                            <div
                                className="bg-blue-500 h-6 rounded-full text-white text-center"
                                style={{ width: `${skill.percentage}%` }}
                            >
                                {skill.name} - {skill.percentage}%
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;