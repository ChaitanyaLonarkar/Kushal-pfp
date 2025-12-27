const Skills = () => {
    const skillCategories = [
        {
            category: "Event Planning",
            skills: ["Venue Management", "Logistics", "Vendor Coordination", "Guest Experience", "Budgeting", "Live Production"]
        },
        {
            category: "Digital Marketing",
            skills: ["Social Media Strategy", "Google Ads", "SEO/SEM", "Content Creation", "Email Marketing", "Brand Identity"]
        },
        {
            category: "Business Strategy",
            skills: ["Growth Hacking", "Market Analysis", "Team Leadership", "Sales Funnels", "Startup Consulting", "Networking"]
        },
        {
            category: "Tools & Platforms",
            skills: ["Trello/Asana", "Canva", "Google Analytics", "Eventbrite", "HubSpot", "Zoom/Google Meet"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="inline-block px-8 py-3 rounded-full bg-gray-100 dark:bg-gray-800 text-3xl font-bold text-gray-900 dark:text-white shadow-sm">
                        Expertise & Tools
                    </h2>
                </div>

                <div className="space-y-12">
                    {skillCategories.map((cat, idx) => (
                        <div key={idx}>
                            <h3 className="text-xl font-bold mb-6 text-gray-700 dark:text-gray-200 border-l-4 border-blue-500 pl-4">
                                {cat.category}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {cat.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 dark:hover:text-blue-300 transition-colors cursor-default border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
