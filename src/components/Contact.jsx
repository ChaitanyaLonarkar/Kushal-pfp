import { useState } from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Thanks for reaching out! Check the console for the form data.");
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300 relative">
            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="inline-block px-8 py-3 rounded-full bg-gray-100 dark:bg-gray-800 text-3xl font-bold text-gray-900 dark:text-white shadow-sm hover:shadow-md transition-shadow">
                        Get In Touch
                    </h2>
                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">
                        Have a project in mind or just want to chat? Reach out!
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100 dark:border-gray-700">
                    {/* Contact Info Side */}
                    <div className="md:w-5/12 bg-gradient-to-br from-blue-600 to-purple-700 p-10 text-white flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                            <p className="text-blue-100 leading-relaxed mb-8">
                                I'm currently opening to new opportunities and collaborations.
                                Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                                    <Mail size={24} />
                                </div>
                                <span>Kushal@example.com</span>
                            </div>
                            <div className="flex items-center gap-4 mt-8">
                                
                                <a href="https://www.instagram.com/kushal_lonarkar120/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-lg hover:bg-white hover:text-blue-600 transition-all transform hover:-translate-y-1">
                                    <Instagram size={24} />
                                </a>
                                <span>@kushal_lonarkar120</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Side */}
                    <div className="md:w-7/12 p-10 bg-white dark:bg-gray-800">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
                                    placeholder="Kushal Lonarkar"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none placeholder-gray-400"
                                    placeholder="Hey there, I'd like to discuss..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg transform hover:-translate-y-0.5"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
