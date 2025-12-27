const About = () => {
    return (
        <section id="about" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center">

                {/* Pill Label */}
                <div className="mb-8">
                    <span className="inline-block px-6 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xl font-bold tracking-wider uppercase">
                        About Me
                    </span>
                </div>

                {/* Headline */}
                <h2 className="text-4xl md:text-6xl font-extrabold text-center text-gray-900 dark:text-white mb-10 leading-tight">
                    Scaling Businesses, <span className="text-blue-600 dark:text-blue-400">One Event</span> at a <br />
                    <span className="text-purple-600 dark:text-purple-400">Time</span>
                </h2>

                {/* Description */}
                <div className="max-w-3xl text-center space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light mb-16">
                    <p>
                        I am an <strong>Event Planner & Business Growth Strategist</strong> dedicated to helping entrepreneurs scale their ventures. My expertise lies in organizing impactful motivational events and providing strategic business solutions.
                    </p>

                    <p>
                        From <span className="font-semibold text-blue-600 dark:text-blue-400">Digital Marketing</span> to <span className="font-semibold text-purple-600 dark:text-purple-400">Brand Promotions</span>, I provide a comprehensive roadmap for business growth. I connect businesses with opportunities, creating environments where ideas flourish and success is inevitable.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 text-center">
                    <div>
                        <div className="text-5xl font-bold text-pink-600 dark:text-pink-400 mb-2">5+</div>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Years Experience</div>
                    </div>
                    <div>
                        <div className="text-5xl font-bold text-pink-600 dark:text-pink-400 mb-2">50+</div>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Events Managed</div>
                    </div>
                    <div>
                        <div className="text-5xl font-bold text-pink-600 dark:text-pink-400 mb-2">100+</div>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Businesses Scaled</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
