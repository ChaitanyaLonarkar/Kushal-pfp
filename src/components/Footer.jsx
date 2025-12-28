import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 dark:bg-black text-white py-12 border-t border-gray-800 dark:border-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <p className="text-lg font-bold">Kushal Lonarkar</p>
                    <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
                </div>

                <div className="flex gap-6">
                    {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a> */}
                    <a href="https://www.instagram.com/kushal_lonarkar120/" target="_blank" className=" flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        Connect me on <Instagram size={20} />
                    </a>
                </div>
            </div>
            <div className="text-center text-gray-400 mt-4" >
                <p>Built with 🧠 & ❤️ by <a href="http://chaitanyalonarkar.netlify.app/" target="_blank" rel="noopener noreferrer" className='text-blue-300 hover:text-blue-400 transition-colors dark:text-blue-400 dark:hover:text-blue-300 animate-pulse font-bold'>Chaitanya Lonarkar</a></p>
            </div>
        </footer>
    );
};

export default Footer;
