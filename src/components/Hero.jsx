import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen w-full relative flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-400 dark:bg-cyan-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center w-full pt-20 lg:pt-0">

                {/* Text Content */}
                <div className="text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
                    <div className="mb-6 inline-block px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-sm">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold text-sm tracking-wide uppercase">
                            Helping Businesses Scale
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white leading-tight">
                        Hello, I'm <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x">
                            Kushal Lonarkar
                        </span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
                        Event Planner & <span className="text-gray-500 dark:text-gray-400">Growth Strategist</span>
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl leading-relaxed">
                        I help businesses grow from <span className="text-gray-900 dark:text-white font-medium">scratch to built</span> through strategic event management, digital marketing, and business consultancy.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <a
                            href="#what-i-do"
                            className="group relative px-8 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 overflow-hidden w-full sm:w-auto justify-center"
                        >
                            <span className="relative z-10">Our Services</span>
                            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                        </a>

                        <a
                            href="#contact"
                            className="px-8 py-3.5 bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-700 backdrop-blur-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto text-center"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
                    <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[550px]">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] transform rotate-6 scale-105 opacity-20 blur-2xl animate-pulse"></div>
                        <img
                            src="https://github.com/ChaitanyaLonarkar/Kushal-pfp/blob/main/src/assets/WhatsApp%20Image%202025-12-27%20at%2021.34.37_f82a19a4.jpg?raw=true"
                            alt="Kushal Lonarkar"
                            className="w-full h-full object-cover rounded-[2rem] shadow-2xl relative z-10 border-4 border-white dark:border-gray-800 transform transition-transform duration-500 hover:scale-[1.02]"
                        />
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 z-20 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Business Growth</p>
                                <p className="text-lg font-bold text-gray-900 dark:text-white">Exponential</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="absolute bottom-10 w-full flex justify-center animate-bounce duration-3000">
                <a href="#about" className="p-2 rounded-full bg-white/30 dark:bg-black/30 backdrop-blur-md hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer">
                    <ChevronDown className="text-gray-600 dark:text-gray-300" size={32} />
                </a>
            </div>
        </section>
    );
};

export default Hero;
