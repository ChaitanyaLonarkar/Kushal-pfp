import { Megaphone, TrendingUp, Users, Calendar } from 'lucide-react';

const WhatIDo = () => {
    const services = [
        {
            icon: <Calendar size={32} className="text-blue-500" />,
            title: "Event Management",
            description: "Planning and executing high-impact motivational and business events that inspire and connect."
        },
        {
            icon: <TrendingUp size={32} className="text-green-500" />,
            title: "Business Strategy",
            description: "Consulting established businesses to scale their operations and reach new heights of success."
        },
        {
            icon: <Megaphone size={32} className="text-yellow-500" />,
            title: "Digital Marketing",
            description: "End-to-end promotion, ad campaigns, and brand visibility strategies to grow your audience."
        },
        {
            icon: <Users size={32} className="text-purple-500" />,
            title: "Business Growth",
            description: "Providing solutions to take businesses from scratch to fully built, sustainable enterprises."
        }
    ];

    return (
        <section id="what-i-do" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
            <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))] dark:bg-grid-slate-700/25 z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="inline-block px-8 py-3 rounded-full bg-white dark:bg-gray-800 text-3xl font-bold text-gray-900 dark:text-white shadow-md mb-4 border border-gray-100 dark:border-gray-700">
                        What I Do
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Delivering strategic growth, impactful events, and comprehensive marketing solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-2 overflow-hidden">
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-300">
                                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatIDo;
