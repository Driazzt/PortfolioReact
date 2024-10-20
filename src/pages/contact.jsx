import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section py-8 w-full max-w-4xl mx-auto text-center">
            <div className="mt-16">
                <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
                <form className="space-y-4 mx-auto max-w-lg">
                    <div>
                        <label htmlFor="name" className="block text-left text-lg font-medium mb-2">Name</label>
                        <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-left text-lg font-medium mb-2">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-left text-lg font-medium mb-2">Message</label>
                        <textarea id="message" name="message" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Send</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;