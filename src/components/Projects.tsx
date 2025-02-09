import React from "react";

const Projects = () => {
    const services = [
        {
          id: 1,
          title: "Web Design",
          description:
            "By understanding your needs and goals, I translate those into wireframes and mockups by blending artistic vision with technical skills to craft user-friendly and visually appealing online experiences.",
        },
        {
          id: 2,
          title: "Web Development",
          description:
            "By combining creativity and technical skills, I can create and maintain websites by using front-end and back-end development, responsive design for most screens, and web performance optimization.",
        },
        {
          id: 3,
          title: "Security/SEO",
          description:
            "I create secure websites with relevant content that meets the needs of your customers. Also, I seek mobile optimization, faster loading pages, and keywords that help search engines and rankings.",
        },
      ];
  return (
    <section className="py-20 bg-gray-100">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-black">Projects</h2>
        <p className="text-lg font-semibold text-gray-700 mt-2">
          Here are some selected projects I have worked on
        </p>
        
      </div>

      {/* Cards Section */}
      <div className="mt-12 flex flex-wrap justify-center gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-black text-white p-8 rounded-lg shadow-lg max-w-xs relative">
            {/* Number Indicator */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center bg-white text-black font-bold rounded-full text-lg shadow-md">
              {service.id}
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-semibold text-center mt-6">{service.title}</h3>
            <p className="text-gray-300 text-center mt-4">{service.description}</p>

            {/* Read More Button */}
            <div className="flex justify-center mt-6">
              <button className="bg-white text-black px-5 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
